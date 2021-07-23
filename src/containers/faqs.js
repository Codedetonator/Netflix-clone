import React from 'react'
import {Accordion} from '../components'
import OptForm from '../components/opt-form';
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
             {faqsData.map(item =>(
                 <Accordion.Item key={item.id}>
                     <Accordion.Header>{item.header}</Accordion.Header>
                     <Accordion.Body>{item.body}</Accordion.Body>
                 </Accordion.Item>
             ))}
             <OptForm>
                 <OptForm.Input placeholder="Enter Your Email"/> 
                 <OptForm.Button>Try it Now</OptForm.Button>
                 <OptForm.Break/>
                 <OptForm.Text>
                     Ready to Watch? Enter your to create or restart your membership
                 </OptForm.Text>
             </OptForm>
        </Accordion>
    )
}