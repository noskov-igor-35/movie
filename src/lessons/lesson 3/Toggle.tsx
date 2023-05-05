import React from 'react';

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
    return <button onClick={this.handleClick}>
      { this.state.isToggleOn ? 'Включено' : 'Выключено' }
    </button>;
  }

  private handleClick(): void {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
}
