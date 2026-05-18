import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SigninPage = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <SignIn afterSignInUrl="/app" />
    </div>
  )
}

export default SigninPage
