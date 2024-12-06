import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarTest = () => {
   return (
      <div className='flex justify-center items-center h-screen'>
         <Avatar>
            <AvatarImage src="/images/profile.png" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
      </div>
   )
}

export default AvatarTest