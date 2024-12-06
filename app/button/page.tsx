import React from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon, Loader2 } from 'lucide-react'
import Link from 'next/link'

const buttonTest = () => {
  return (
    <div className='flex gap-4 justify-center h-screen mt-10'>
      <div className='flex flex-col gap-4'>
        {/* primary button */}
        <Button className='px-10'>
          primary
        </Button>
        {/* secondary button */}
        <Button className='px-10' variant='secondary'>
          secondary
        </Button>
        {/* destructive button */}
        <Button className='px-10' variant='destructive'>
          destructive
        </Button>
        {/* outline button */}
        <Button className='px-10' variant='outline'>
          outline
        </Button>
        {/* ghost button */}
        <Button className='px-10' variant='ghost'>
          ghost
        </Button>
        {/* link button */}
        <Button className='px-10' variant='link'>
          link
        </Button>
        {/* icon button */}
        <Button className='px-10' variant='outline' size='icon'>
          <PlusIcon />
        </Button>
        {/* icon button with text */}
        <Button className='px-10' variant='outline' size='icon'>
          <PlusIcon />
          icon with text
        </Button>
        {/* loading button */}
        <Button disabled>
          <Loader2 className='animate-spin' />
          loading...
        </Button>
      </div>
      <div className='flex flex-col gap-4'>
        {/* button with children */}
        <Button className='px-10'>
          <Link href='/'>
            link
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default buttonTest