import React from 'react'
import SignInButton from './_components/SignIn-btn'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';

const page = async () => {
    const session  = await auth();
    if (session) {
        redirect("/");
    }

  return (
    <div className='flex-1 flex bg-gradient-to-r from-pink-500 to-purple-500 justify-center items-center h-screen'>
        
        <div className='w-3/12 bg-white rounded p-4'>
        <h1 className='text-2xl text-center font-bold'>Login Here</h1>

        <SignInButton/> 
        </div>

    </div>
  )
}

export default page