import React, { Component } from 'react';
import LeadingTableScreen from '../components/LeadingTableScreen.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from '../flux/actions.js';

const mapStateToProps = state => ({
    currentUserData: state.pushthebutton.currentUserData,
    //todo здесь подтягиваем асинхронно из базы список игроков, если в нём что-то изменилось
    playerList: state.pushthebutton.playerList
});

const mapActionsToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});

class LeadingTableContainer extends Component {
    constructor(props) {
       super(props);

        this.onMainScreen = this.onMainScreen.bind(this);
        this.onResetPLayerList = this.onResetPLayerList.bind(this);
    }

    onMainScreen() {  
        const { currentUserData, playerList } = this.props;

        this.props.navigation.navigate('Main');
        this.props.actions.setSignOut(currentUserData.login);
        this.props.actions.resetAll({ playerList });
    }

    onResetPLayerList() {  
        const { playerList } = this.props;

        this.props.actions.resetPlayerList({ playerList });
    }

    render() {
        return (
            <LeadingTableScreen 
                playerList={this.props.playerList} 
                onMainScreen={this.onMainScreen}
                onResetPLayerList={this.onResetPLayerList} 
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(LeadingTableContainer);