import React from 'react';

interface Props {
  unreadMessages: string[]
}

export default function Mailbox(props: Props): JSX.Element {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1 className='m-0'>Здравствуйте!</h1>
      { unreadMessages.length > 0 && <h2 className='m-0'>У вас {unreadMessages.length} непрочитанных сообщений.</h2> }
    </div>
  );
}
