import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from '../flux/actions.js';
import MainScreen from '../components/MainScreen.js';
  
const mapActionsToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});
  
 class MainContainer extends Component {
     constructor(props){ 
         super(props);

         this.onLoginAsPlayer = this.onLoginAsPlayer.bind(this);
         this.onLoginAsLeading = this.onLoginAsLeading.bind(this);
     } 

     onLoginAsPlayer() {
        this.props.navigation.navigate('PlayerLogin');
     }

     onLoginAsLeading() {
        this.props.navigation.navigate('LeadingLogin');
    }

    render() {
        return (
            <MainScreen
                onLoginAsPlayer={this.onLoginAsPlayer}
                onLoginAsLeading={this.onLoginAsLeading}
             />
        )
    }
}

export default connect(
    null,
    mapActionsToProps
)(MainContainer);