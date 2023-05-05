import React from 'react';

interface Props {
  warn: boolean
}

export default function WarningBanner(props: Props): JSX.Element | null {
  return props.warn ? <div className="warning">Предупреждение!</div> : null;
}
