import React, { Component } from 'react';
import PlayerButtonScreen from '../components/PlayerButtonScreen.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from '../flux/actions.js';

const mapStateToProps = state => ({
    login: state.pushthebutton.currentUserData.login,
    //todo здесь подтягиваем асинхронно из базы список игроков, если в нём что-то изменилось на componentDidUpdate, например
    playerList: state.pushthebutton.playerList
});

const mapActionsToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});

class PlayerButtonContainer extends Component {
    constructor(props){ 
        super(props);

        this.onVote = this.onVote.bind(this);
    } 

    componentDidUpdate(prevProps) {
        const nextProps = this.props;

        if (!nextProps.playerList.find(player => player.login === prevProps.login)) {
            nextProps.navigation.navigate('Main');
        }
    }

    onVote() {  
        this.props.actions.pushTheButton(this.props.login);
    }

  render() {
    return (
      <PlayerButtonScreen
        onVote={this.onVote}
      />
    );
  }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(PlayerButtonContainer);