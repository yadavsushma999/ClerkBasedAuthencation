"use client"
import TypeSelectionForm from '@/app/auth/sign-up/type-selection-form'
import { Spinner } from '@/components/spinner'
import { useAuthContextHook } from '@/context/auth-use-context'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
const AccountDetailsForm = dynamic(() => import('./account-details-form'), {
  ssr: false,
  loading: () => <Spinner />,
})

const OTPForm = dynamic(() => import('./otp-form'), {
  ssr: false,
  loading: () => <Spinner />,
})

const RegistrationFormStep = () => {
    const { register, formState: { errors }, setValue } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')
    setValue('otp', onOTP)

    switch (currentStep) {
        case 1: return (
            <TypeSelectionForm
                register={register}
                userType={onUserType}
                setUserType={setOnUserType} />

        )
        case 2: return(<AccountDetailsForm
            errors={errors}
            register={register}/>
        )

        case 3:
            return(
                <OTPForm
                onOTP={onOTP}
                setOTP={setOnOTP}/>
            )

        
    }

    return (
        <div>Rgis</div>
    )
}

export default RegistrationFormStep