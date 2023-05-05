import React from 'react';
import WarningBanner from './WarningBanner';

interface State {
  showWarning: boolean
}

export default class Page extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      showWarning: true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  render(): React.ReactNode {
    return (
      <div>
        <WarningBanner warn={ this.state.showWarning }/>
        <button onClick={ this.handleToggleClick }>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }

  private handleToggleClick(): void {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
}
