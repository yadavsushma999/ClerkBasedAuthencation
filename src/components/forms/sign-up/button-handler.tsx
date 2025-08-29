
'use client'
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/auth-use-context'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'


const ButtonHandler = () => {
    const { setCurrentStep, currentStep } = useAuthContextHook()
    const { formState, getFieldState, getValues } = useFormContext()
    const { onGenerateOTP } = useSignUpForm()

    const { isDirty: isName } = getFieldState('fullname', formState)
    const { isDirty: isEmail } = getFieldState('email', formState)
    const { isDirty: isPassword } = getFieldState('password', formState)

    if (currentStep === 2) {
        return (
            <div className='w-full flex flex-col gap-3 items-center'>
                <Button
                    type="submit"
                    className="w-full bg-blue-900"
                    {...(isName && 
                        isEmail && 
                        isPassword && {
                            onClick:()=>
                                onGenerateOTP(
                                    getValues('email'),
                                    getValues('password'),
                                    setCurrentStep
                                ),
                        })}>
                            Continue
                </Button>
                <p>
                    Already have an account?{''}
                    <Link href="/auth/sign-in" className='font-bold'>
                        Sign In
                    </Link>
                </p>
            </div>
        )
    }

    if (currentStep === 3) {
        return (
            <div className='w-full flex flex-col gap-3 items-center'>
                <Button
                    type="submit"
                    className="w-full bg-blue-900">
                    Create an account
                </Button>
                <p>
                    Already have an account?{''}
                    <Link href="/auth/sign-in" className='font-bold'>
                        Sign In
                    </Link>
                </p>
            </div>
        )
    }

    return (
        <div className='w-full flex flex-col gap-3 items-center'>
            <Button
                type="submit"
                className='w-full bg-blue-900'
                onClick={() => setCurrentStep((prev: number) => prev + 1)}>
                Continue
            </Button>
            <p>
                Already have an acoount?{''}
                <Link href="/auth/sign-in" className='font-bold'>
                    Sign In
                </Link>
            </p>
        </div>
    )
}

export default ButtonHandler