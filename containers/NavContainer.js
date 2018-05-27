import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';

import MainContainer from './MainContainer.js';
import PlayerLoginContainer from './PlayerLoginContainer.js';
import LeadingLoginContainer from './LeadingLoginContainer.js';
import PlayerButtonContainer from './PlayerButtonContainer.js';
import LeadingTableContainer from './LeadingTableContainer.js';

const NavContainer = createStackNavigator(
    {
        Main: MainContainer,
        PlayerLogin: PlayerLoginContainer,
        LeadingLogin: LeadingLoginContainer,
        PlayerButton: PlayerButtonContainer,
        LeadingTable: LeadingTableContainer
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);

export default NavContainer;