import React from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

interface State {
  isLoggedIn: boolean
}

export default class LoginControl extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  render(): React.ReactNode {
    const isLoggedIn = this.state.isLoggedIn;

    return <div>
      <Greeting isLoggedIn={ isLoggedIn }/>
      {
        isLoggedIn
          ? <LogoutButton onClick={ this.handleLogoutClick}/>
          : <LoginButton onClick={ this.handleLoginClick}/>
      }
    </div>;
  }

  private handleLoginClick(): void {
    this.setState({
      isLoggedIn: true
    });
  }

  private handleLogoutClick(): void {
    this.setState({
      isLoggedIn: false
    });
  }
}
