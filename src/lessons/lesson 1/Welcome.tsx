import React from 'react';

interface Props {
  name: string
}

export default function Welcome(props: Props): JSX.Element {
  return <h1>Привет, {props.name}</h1>;
}
