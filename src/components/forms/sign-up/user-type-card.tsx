'use client'

import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: 'owner' | 'student'
    title: string
    text: string
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({
    register,
    setUserType,
    text,
    title,
    userType,
    value,
}: Props) => {
    return (
        <div
            className="w-full"
            onClick={() => setUserType(value)}
        >
            <Input
                type="radio"
                id={value}
                value={value}
                {...register('type')}
                checked={userType === value}
                className="hidden"
            />

            <Card
                className={cn(
                    'cursor-pointer transition border',
                    userType === value ? 'border-blue-800' : 'border-gray-200'
                )}
            >
                <CardContent className="flex justify-between p-2">
                    <div className="flex items-center gap-3">
                        <div
                            className={cn(
                                'flex justify-center items-center p-3 border rounded',
                                userType === value ? 'border-blue-800' : 'border-gray-300'
                            )}
                        >
                            <User
                                size={30}
                                className={cn(
                                    userType === value ? 'text-blue-800' : 'text-gray-500'
                                )}
                            />
                        </div>
                        <div>
                            <CardDescription className="text-iridium">{title}</CardDescription>
                            <CardDescription className="text-gray-400">{text}</CardDescription>
                        </div>
                    </div>
                    <div
                        className={cn(
                            'w-4 h-4 rounded-full mt-2',
                            userType === value ? 'bg-blue-800' : 'bg-transparent border border-gray-400'
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default UserTypeCard
