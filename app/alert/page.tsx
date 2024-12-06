import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Terminal } from 'lucide-react'

const AlertTest = () => {
   return (
      <div className='flex flex-col gap-4 justify-center items-center h-screen'>
         <Alert>
            <Terminal className='h-4 w-4' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
               You can add components to your app using the cli.
            </AlertDescription>
         </Alert>
         <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
               You can add components to your app using the cli.
            </AlertDescription>
         </Alert>
      </div>
   )
}

export default AlertTest