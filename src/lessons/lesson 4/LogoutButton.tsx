import React, { type MouseEventHandler } from 'react';
import { Button } from 'primereact/button';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function LogoutButton(props: Props): JSX.Element {
  return <Button label='Выйти'
                 size='small'
                 onClick={props.onClick}/>;
}
