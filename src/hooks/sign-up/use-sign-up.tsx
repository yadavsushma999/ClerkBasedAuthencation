"use client"
import React, { useState } from 'react';;
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { UserRegistrationProps, UserRegistrationSchema } from "@/schemas/auth.schema";
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner';

export const useSignUpForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { signUp, isLoaded, setActive } = useSignUp()
    const router = useRouter()
    const methods = useForm<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        defaultValues: {
            type: 'owner',
        },
        mode: 'onChange'
    })

    const onGenerateOTP = async (
        email: string,
        password: string,
        onNext: React.Dispatch<React.SetStateAction<number>>
    ) => {
        if (!isLoaded) return
        try {
            await signUp.create({
                emailAddress: email,
                password,
            })

            // ✅ correct method name
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
            onNext((prev) => prev + 1)
            alert("running");
        } catch (error: any) {
            toast.error(error.errors?.[0]?.longMessage ?? "Something went wrong")
        }
    }

    const onHandleSubmit = methods.handleSubmit(
        async (values: UserRegistrationProps) => {
            if (!isLoaded) return;

            try {
                setLoading(true);

                const completeSignUp = await signUp.attemptEmailAddressVerification({
                    code: values.otp,
                });

                console.log("Verification response:", completeSignUp);

                if (completeSignUp.status !== "complete") {
                    toast.error("Email verification failed!");
                    return;
                }

                if (!signUp.createdUserId) {
                    toast.error("User creation failed. Please try again.");
                    return;
                }

                const registered = await fetch("/api/auth/sign-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName: values.fullname,
                        clerkId: signUp.createdUserId,
                        type: values.type,
                    }),
                }).then((res) => res.json());

                console.log("Register", registered, registered?.status, registered?.user);

                if (registered?.status === 200 && registered.user) {
                    await setActive({
                        session: completeSignUp.createdSessionId,
                    });

                    setLoading(false);
                    router.push("/dashboard");
                } else {
                    toast.error("Something went wrong while saving user data.");
                }
            } catch (error: any) {
                console.error("SignUp Error", error);

                const message =
                    error?.errors?.[0]?.longMessage ||
                    error?.response?.errors?.[0]?.longMessage ||
                    error?.message ||
                    "Something went wrong";

                toast.error(message);
            } finally {
                setLoading(false);
            }
        }
    );

    return {
        methods,
        onHandleSubmit,
        onGenerateOTP,
        loading,
    }


}



