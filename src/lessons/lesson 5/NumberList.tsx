import React from 'react';

interface Props {
  numbers: number[]
}

export default function NumberList(props: Props): JSX.Element {
  return <ul>{ props.numbers.map((num) => <li key={ num }>{ num }</li>) }</ul>;
}
