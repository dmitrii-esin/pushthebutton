import React, { Component } from 'react';
import PlayerLoginScreen from '../components/PlayerLoginScreen.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from '../flux/actions.js';

const mapActionsToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});

class PlayerLoginContainer extends Component {
    constructor(props){ 
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onMainScreen = this.onMainScreen.bind(this);

        this.state = { login: '', password: '' }
    } 

    onChangeLogin(login) {
        this.setState({ login })
    }

    onChangePassword(password) {  
        this.setState({ password })
    }

    onSubmitLogin() {  
        const { login, password } = this.state;

        this.props.actions.provideCredentials({ login, password });
    }

    onMainScreen(login) {
        this.props.navigation.navigate('Main');
    }

  render() {
    const { login, password } = this.state;

    return (
      <PlayerLoginScreen
        onChangeLogin={this.onChangeLogin}
        onChangePassword={this.onChangePassword}
        onSubmitLogin={this.onSubmitLogin}
        onMainScreen={this.onMainScreen}
        login={login}
        password={password}
      />
    );
  }
}

export default connect(
    null,
    mapActionsToProps
)(PlayerLoginContainer);