import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ErrorMessage } from "@hookform/error-message"
import React from 'react'
import { useFormContext,UseFormRegister } from 'react-hook-form'

type Props = {
    type?: 'text' | 'email' | 'password'
    inputType: 'select' | 'input' | 'textarea'
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    name: string
    lines?: number
    form?: string
    register: UseFormRegister<any>
}

const FormGenerator = ({ inputType, name, placeholder, type, form, label, lines, options,register }: Props) => {
    const {
        formState: { errors, touchedFields },
    } = useFormContext()

    switch (inputType) {
        case "input":
            return (
                <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
                    {label && label}
                    <Input
                        id={`input-${label}`}
                        type={type}
                        placeholder={placeholder}
                        form={form}
                        {...register(name)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) =>
                            touchedFields[name] ? (
                                <p className="text-red-400 mt-2">
                                    {message === "Required" ? '' : message}
                                </p>
                            ) : null
                        }
                    />
                </Label>
            )

        case "select":
            return (
                <Label htmlFor={`select-${label}`}>
                    {label && label}
                    <select id={`select-${label}`} form={form} {...register(name)}>
                        {options?.map((option) => (
                            <option value={option.value} key={option.id}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === "Required" ? '' : message}
                            </p>
                        )}
                    />
                </Label>
            )

        case "textarea":
            return (
                <Label htmlFor={`textarea-${label}`}>
                    {label && label}
                    <Textarea
                        id={`textarea-${label}`}
                        form={form}
                        rows={lines}
                        {...register(name)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === "Required" ? '' : message}
                            </p>
                        )}
                    />
                </Label>
            )

        default:
            return null
    }
}

export default FormGenerator
