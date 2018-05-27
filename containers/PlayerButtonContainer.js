import React, { Component } from 'react';
import PlayerButtonScreen from '../components/PlayerButtonScreen.js';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actions  from '../flux/actions.js';

// const mapStateToProps = state => ({
//     isButtonPushed: state.isButtonPushed
//   });
//
//   const mapActionsToProps = (dispatch, props) => ({
//     actions: bindActionCreators(actions, dispatch)
//   });

export default class PlayerButtonContainer extends Component {
    constructor(props){ 
        super(props);

        this.onVote = this.onVote.bind(this);
    } 

    onVote() {  
       console.log('vote!');
    }

  render() {
    return (
      <PlayerButtonScreen
        onVote={this.onVote}
      />
    );
  }
}