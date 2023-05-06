import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Welcome from './lesson 1';
import Clock from './lesson 2';
import Toggle from './lesson 3';
import { LoginControl, Mailbox, Page } from './lesson 4';
import { Blog, NumberList } from './lesson 5';
import Form from './lesson 6';

const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1, 2, 3, 4, 5];

const posts = [
  { id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!' },
  { id: 2, title: 'Установка', content: 'React можно установить из npm.' }
];

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
      <AccordionTab header='Lesson 5'>
        <NumberList numbers={ numbers }/>
        <Blog posts={ posts }/>
      </AccordionTab>
      <AccordionTab header='Lesson 6'>
        <Form/>
      </AccordionTab>
    </Accordion>
  );
}
