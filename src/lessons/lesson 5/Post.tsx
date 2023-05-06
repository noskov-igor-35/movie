import React from 'react';

interface Props {
  title: string
  content: string
}

export default function Post(props: Props): JSX.Element {
  return <div className='m-4'>
    <h3 className='m-0'>{ props.title }</h3>
    <p className='m-0'>{ props.content }</p>
  </div>;
}
