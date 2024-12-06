import React from 'react'
import { Badge } from '@/components/ui/badge'

const BadgeTest = () => {
   return (
      <div className='flex flex-col gap-4 justify-center items-center h-screen'>
         <Badge>primary</Badge>
         <Badge variant="secondary">secondary</Badge>
         <Badge variant="destructive">destructive</Badge>
         <Badge variant="outline">outline</Badge>
      </div>
   )
}

export default BadgeTest