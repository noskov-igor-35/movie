import React from 'react';
import { Welcome, Clock, Toggle, LoginControl, Mailbox, Page } from './lessons';

const messages = ['React', 'Re: React', 'Re:Re: React'];

export default function App(): JSX.Element {
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
