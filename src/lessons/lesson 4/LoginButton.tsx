import React, { type MouseEventHandler } from 'react';
import { Button } from 'primereact/button';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function LoginButton(props: Props): JSX.Element {
  return <Button label='Войти'
                 size='small'
                 onClick={props.onClick}/>;
}
