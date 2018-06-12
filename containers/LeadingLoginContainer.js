import React, { Component } from 'react';
import LeadingLoginScreen from '../components/LeadingLoginScreen.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from '../flux/actions.js';

const mapStateToProps = state => ({
    currentUserData: state.pushthebutton.currentUserData
});

const mapActionsToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});

class LeadingLoginContainer extends Component {
    constructor(props){ 
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onAuth = this.onAuth.bind(this);
        this.onMainScreen = this.onMainScreen.bind(this);

        this.state = { login: '', password: '' }
    } 

    componentDidUpdate(prevProps) {
        const nextProps = this.props;

        if (nextProps.currentUserData.authType === 'leading') {
            nextProps.navigation.navigate('LeadingTable');
        }
    }

    _validateСredentials(login, password) {
        if (login.length > 0 && password.length > 0) {
            return true;
        }

        return false;
    }

    onChangeLogin(login) {
        this.setState({ login })
    }

    onChangePassword(password) {  
        this.setState({ password })
    }

    onAuth() {  
        const { login, password } = this.state;

        const isValidCredentials = this._validateСredentials(login, password);

        if (isValidCredentials) {
            this.props.actions.setAuthLeading({ login, password, authType: 'leading' });
        } 
    }

    onMainScreen(login) {
        this.props.navigation.navigate('Main');
        this.props.actions.setSignOut(this.state.login);
    }

  render() {
    const { login, password } = this.state;

    return (
      <LeadingLoginScreen
        onChangeLogin={this.onChangeLogin}
        onChangePassword={this.onChangePassword}
        onAuth={this.onAuth}
        onMainScreen={this.onMainScreen}
        login={login}
        password={password}
      />
    );
  }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(LeadingLoginContainer);