import { USER_REGISTRATION_FORM } from '@/constants/form'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-generator'

type Props = {
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

const AccountDetailsForm = ({register}: Props) => {
  return (
    <>
    <h2 className='text-gravel md:text-4xl font-bold'>
        Account details
    </h2>
    <p className='text-gray-400 md:text-sm '>
        Enter your email and password
    </p>
    <div id="clerk-captcha" />
    {USER_REGISTRATION_FORM.map((field)=>(
        <FormGenerator
        key={field.id}
        {...field}
        register={register}
        name={field.name}
        />
    ))}
    </>
  )
}

export default AccountDetailsForm