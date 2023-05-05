import React, { type MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function LogoutButton(props: Props): JSX.Element {
  return <button onClick={props.onClick}>
    Выйти
  </button>;
}
