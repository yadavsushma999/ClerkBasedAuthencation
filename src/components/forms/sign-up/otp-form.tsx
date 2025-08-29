import OTPInput from '@/components/otp'
import React from 'react'

type Props = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
}

const otpForm = ({ onOTP, setOTP }: Props) => {
    return (
        <>
            <h2 className=' md:text-4xl font-bold'>
                Enter OTP
            </h2>
            <p className='text-gray-400 md:text-sm'>
                Enter the one time password that was sent to your email
            </p>
            <div className='w-full justify-center flex py-5 '>
                <OTPInput
                otp={onOTP}
                setOtp={setOTP}/>

            </div>
        </>
    )
}

export default otpForm