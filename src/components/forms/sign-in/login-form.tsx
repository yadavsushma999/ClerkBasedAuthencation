"use client"

import { USER_LOGIN_FORM } from '@/constants/form'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import FormGenerator from '../form-generator'

type Props = {}

const LoginForm = (props: Props) => {
    const {
        register, 
        formState:{errors}
    } = useFormContext()
  return (
    <>
    <h2 className='text-gray-400 md:text-4xl font-bold'>
        Login
    </h2>
    <p>
        You will receive a one time password 
    </p>
    {USER_LOGIN_FORM.map((field)=>(
        <FormGenerator
        key={field.id}
        {...field}
        register={register}
        name={field.name}/>
    ))}
    </>
  )
}

export default LoginForm