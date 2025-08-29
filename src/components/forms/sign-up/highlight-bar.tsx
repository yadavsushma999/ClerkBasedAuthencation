
'use client'
import { useAuthContextHook } from '@/context/auth-use-context'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const HighlightBar = (props: Props) => {
    const { currentStep } = useAuthContextHook()

    return (
        <div className='grid grid-cols-3 gap-3'>
            <div className={cn(
                'rounded-full h-2 col-span-1',
                currentStep == 1 ? 'bg-blue-800' : 'bg-gray-400'
            )}>
            </div>

            <div className={cn(
                'rounded-full h-2 col-span-1',
                currentStep == 2 ? 'bg-blue-800' : 'bg-gray-400'
            )}>
            </div>

            <div className={cn(
                'rounded-full h-2 col-span-1',
                currentStep == 3 ? 'bg-blue-800' : 'bg-gray-400'
            )}>
            </div>
        </div>

    )
}

export default HighlightBar