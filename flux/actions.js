import * as TYPE from '../const/actionTypes';
// import firebase from 'firebase';

export const setAuthPlayer = ({ login, password, authType }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_AUTH_PLAYER });

        // return firebase.initializeApp({
        //     apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
        //     authDomain: 'authentication-70a18.firebaseapp.com',
        //     databaseURL: 'https://authentication-70a18.firebaseio.com',
        //     storageBucket: 'authentication-70a18.appspot.com',
        //     messagingSenderId: '682333809338'
        //   });
        //   firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //       this.setState({ loggedIn: true });
        //     } else {
        //       this.setState({ loggedIn: false });
        //     }
        //   })
        //   .then((res) => {
            
        dispatch({
            type: TYPE.RECEIVE_AUTH_PLAYER,
            payload: { login, authType, status: false }
        });
            //  })
        //     .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_PLAYER, error }));
    }
};

export const setAuthLeading = ({ login, password, authType }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_AUTH_LEADING });

        // return firebase.initializeApp({
        //     apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
        //     authDomain: 'authentication-70a18.firebaseapp.com',
        //     databaseURL: 'https://authentication-70a18.firebaseio.com',
        //     storageBucket: 'authentication-70a18.appspot.com',
        //     messagingSenderId: '682333809338'
        //   });
        //   firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //       this.setState({ loggedIn: true });
        //     } else {
        //       this.setState({ loggedIn: false });
        //     }
        //   })
        //   .then((res) => {
        dispatch({
            type: TYPE.RECEIVE_AUTH_LEADING,
            payload: { login, authType }
        });
        //      })
        //     .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_LEADING, error }));
    }
};

export const setSignOut = ({ login }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_SIGN_OUT });
        
        // return firebase.initializeApp({
        //     apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
        //     authDomain: 'authentication-70a18.firebaseapp.com',
        //     databaseURL: 'https://authentication-70a18.firebaseio.com',
        //     storageBucket: 'authentication-70a18.appspot.com',
        //     messagingSenderId: '682333809338'
        //   });
        //   firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //       this.setState({ loggedIn: true });
        //     } else {
        //       this.setState({ loggedIn: false });
        //     }
        //   })
        //   .then((res) => {
        dispatch({
            type: TYPE.RECEIVE_SIGN_OUT,
            // payload: { login }
        });
        //      })
        //     .catch((error) => dispatch({ type: TYPE.FAIL_SIGN_OUT, error }));
    }
};

export const pushTheButton = login => {
    return (dispatch) => {
        dispatch({
            type: TYPE.PUSH_THE_BUTTON,
            payload: { login, status: true }
        })
    }
};

export const resetPlayerList = ({ playerList }) => {
    // @todo разлогинить всех игроков
    return (dispatch) => {
        dispatch({
            type: TYPE.RESET_PLAYER_LIST
        })
    }
};

export const resetAll = ({ playerList }) => {
     // @todo разлогинить всех игроков
    return (dispatch) => {
        dispatch({
            type: TYPE.RESET_ALL
        })
    }
};