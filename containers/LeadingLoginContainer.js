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

    // static getDerivedStateFromProps(nextProps, prevState){
    //     const prevProps = this.props;

    //     if (nextProps.currentUserData.authType === 'leading') {
    //         this.props.navigation.navigate('LeadingTable');
    //     }
    // }

    onChangeLogin(login) {
        this.setState({ login })
    }

    onChangePassword(password) {  
        this.setState({ password })
    }

    onAuth() {  
        const { login, password } = this.state;

        this.props.actions.setAuthLeading({ login, password, authType: 'leading' });
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
        onSubmitLogin={this.onSubmitLogin}
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