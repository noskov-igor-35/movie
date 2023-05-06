import React from 'react';

interface Props {
  name: string
}

export default function Welcome(props: Props): JSX.Element {
  return <h1 className='m-0'>Привет, {props.name}</h1>;
}
