import React from 'react';

interface State {
  date: Date
}

export default class Clock extends React.Component<unknown, State> {
  public timerID: NodeJS.Timer | undefined;

  constructor(props: unknown) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  public componentDidMount(): void {
    this.timerID = setInterval(
      () => {
        this.tick();
      }, 1000
    );
  }

  public componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  private tick(): void {
    this.setState({
      date: new Date()
    });
  }
}
