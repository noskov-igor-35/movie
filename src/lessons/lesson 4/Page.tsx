import React from 'react';
import WarningBanner from './WarningBanner';
import { Button } from 'primereact/button';

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
      <div className='mt-1'>
        <WarningBanner warn={ this.state.showWarning }/>
        <Button label={this.state.showWarning ? 'Спрятать' : 'Показать'}
                size='small'
                onClick={ this.handleToggleClick }/>
      </div>
    );
  }

  private handleToggleClick(): void {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
}
