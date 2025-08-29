import ButtonHandler from '@/components/forms/sign-up/button-handler'
import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import HighlightBar from '@/components/forms/sign-up/highlight-bar'
import RegistrationFormStep from '@/components/forms/sign-up/registrationFormStep'

import React from 'react'

const SignUp = () => {
  return (
    <div className='flex1 py-36 md:px-16 w-full'>
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className='flex flex-col gap-3 '>
            < RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighlightBar />
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp