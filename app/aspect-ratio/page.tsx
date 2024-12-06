import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const AspectRatioTest = () => {
   return (
      <div className="w-[450px] flex justify-center items-center h-screen">
         <AspectRatio ratio={ 16 / 9}>
            <Image src="/images/wallpaper.jpg"
               width={1000}
               height={1000}
               alt="Image"
               className="rounded-md object-cover"
            />
         </AspectRatio>
      </div>
   )
}

export default AspectRatioTest
