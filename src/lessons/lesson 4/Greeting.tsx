import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

interface Props {
  isLoggedIn: boolean
}

export default function Greeting(props: Props): JSX.Element {
  return props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>;
}
