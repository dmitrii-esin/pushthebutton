import React from 'react';
import { Provider } from 'react-redux';
import store from './flux/store.js';
import { View, StyleSheet } from 'react-native';

import NavContainer from './containers/NavContainer.js';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.root}>
                    <NavContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(7,25,67,.1)'
    }
  });

export default App;