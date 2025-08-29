import { UserLoginProps, UserLoginSchema } from '@/schemas/auth.schema'
import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useSignInForm = () => {
    const { isLoaded, setActive, signIn } = useSignIn()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const methods = useForm<UserLoginProps>({
        resolver: zodResolver(UserLoginSchema),
        mode: 'onChange',
    })

    const onHandleSubmit = methods.handleSubmit(
        async (values: UserLoginProps) => {
            if (!isLoaded) return

            try {
                setLoading(true)

                const authenticated = await signIn.create({
                    identifier: values.email,
                    password: values.password,
                })

                if (authenticated.status === 'complete') {
                    await setActive({ session: authenticated.createdSessionId })
                    toast.success("Welcome Back!")
                    router.push('/dashboard')
                }
            } catch (error: any) {
                console.error("Sign-in error:", error)

                if (error?.errors?.[0]?.code === 'form_password_incorrect') {
                    toast.error("Email or password is incorrect. Please try again.")
                } else {
                    toast.error(error?.errors?.[0]?.longMessage ?? "Something went wrong.")
                }
            } finally {
                setLoading(false)
            }
        }
    )

    return {
        methods,
        onHandleSubmit,
        loading,
    }
}
