import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const AccordionTest = () => {
   return (
      <div className='flex justify-center items-center h-screen'>
         <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
               <AccordionTrigger>Is that abbas?</AccordionTrigger>
               <AccordionContent>
                  Yes, this is abbas leenud brother.
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default AccordionTest