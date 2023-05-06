import React from 'react';
import Welcome from './lesson 1';
import Clock from './lesson 2';
import Toggle from './lesson 3';
import { LoginControl, Mailbox, Page } from './lesson 4';

const messages = ['React', 'Re: React', 'Re:Re: React'];

export default function Lessons(): JSX.Element {
  return (
    <div>
      <div>
        <span>Lesson 1</span>
        <Welcome name="Алиса" />
        <Welcome name="Базилио" />
        <Welcome name="Буратино" />
      </div>
      <div>
        <span>Lesson 2</span>
        <Clock/>
        <Clock/>
      </div>
      <div>
        <span>Lesson 3</span>
        <Toggle/>
      </div>
      <div>
        <span>Lesson 4</span>
        <LoginControl/>
        <Mailbox unreadMessages={ messages } />
        <Page/>
      </div>
    </div>
  );
}
