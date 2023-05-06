import React from 'react';
import { Button } from 'primereact/button';

interface State {
  isToggleOn: boolean
}

export default class Toggle extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render(): React.ReactNode {
    return <Button label={ this.state.isToggleOn ? 'Включено' : 'Выключено' }
                   size='small'
                   onClick={this.handleClick}/>;
  }

  private handleClick(): void {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
}
