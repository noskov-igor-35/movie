import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Welcome from './lesson 1';
import Clock from './lesson 2';
import Toggle from './lesson 3';
import { LoginControl, Mailbox, Page } from './lesson 4';

const messages = ['React', 'Re: React', 'Re:Re: React'];

export default function Lessons(): JSX.Element {
  return (
    <Accordion activeIndex={0}>
      <AccordionTab header='Lesson 1'>
        <Welcome name='Алиса' />
        <Welcome name='Базилио' />
        <Welcome name='Буратино' />
      </AccordionTab>
      <AccordionTab header='Lesson 2'>
        <Clock/>
        <Clock/>
      </AccordionTab>
      <AccordionTab header='Lesson 3'>
        <Toggle/>
      </AccordionTab>
      <AccordionTab header='Lesson 4'>
        <LoginControl/>
        <Mailbox unreadMessages={ messages } />
        <Page/>
      </AccordionTab>
    </Accordion>
  );
}
