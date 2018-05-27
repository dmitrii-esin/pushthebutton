import React, { Component } from 'react';
import LeadingTableScreen from '../components/LeadingTableScreen.js';

//TODO: remove mock data
const mockData =[
    {id: 1, player: 'player 111', isVote: false},
    {id: 2, player: 'player 222', isVote: false},
    {id: 3, player: 'player 333', isVote: true},

    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
    {id: 3 + Math.random(), player: 'player 333', isVote: true},
];

export default class LeadingTableContainer extends Component {
    constructor(props) {
       super(props);

        this.onMainScreen = this.onMainScreen.bind(this);
        this.onResetAll = this.onResetAll.bind(this);
    }

    onMainScreen() {  
        this.props.navigation.navigate('Main');
    }

    onResetAll() {  
       console.log('resel all!');
    }

  render() {
    return (
      <LeadingTableScreen 
        playersData={mockData} 
        onResetAll={this.onResetAll} 
        onMainScreen={this.onMainScreen}
       />
    );
  }
}