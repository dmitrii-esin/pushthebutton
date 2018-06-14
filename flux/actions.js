import * as TYPE from '../const/actionTypes';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDB87jxtOipEUuoR-LHDq7uoSDmkpbJAh4",
    authDomain: "push-the-button-be723.firebaseapp.com",
    databaseURL: "https://push-the-button-be723.firebaseio.com",
    projectId: "push-the-button-be723",
    storageBucket: "push-the-button-be723.appspot.com",
    messagingSenderId: "881572911380"
};

export const setAuthPlayer = ({ login, password, authType }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_AUTH_PLAYER });

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user.emailVerified) {
                firebase.auth().signInWithEmailAndPassword(login, password)
                .then(() => dispatch({
                    type: TYPE.RECEIVE_AUTH_PLAYER,
                    payload: { login, authType, status: false }
                }))
                .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_PLAYER, error }));
                    
            } else {   
                firebase.auth().createUserWithEmailAndPassword(login, password)
                .then(() => firebase.auth().signInWithEmailAndPassword(login, password))
                .then(() => dispatch({
                    type: TYPE.RECEIVE_AUTH_PLAYER,
                    payload: { login, authType, status: false }
                }))
                .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_PLAYER, error }));
            }
        })
    }
};

export const setAuthLeading = ({ login, password, authType }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_AUTH_LEADING });

        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                return firebase.auth().signInWithEmailAndPassword(login, password)
                    .then(() => dispatch({
                        type: TYPE.RECEIVE_AUTH_LEADING,
                        payload: { login, authType }
                    }))
                    .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_LEADING, error }));
            } else {   
                return firebase.auth().createUserWithEmailAndPassword(login, password)
                    .then(() => firebase.auth().signInWithEmailAndPassword(login, password))
                    .then(() => dispatch({
                        type: TYPE.RECEIVE_AUTH_LEADING,
                        payload: { login, authType }
                    }))
                    .catch((error) => dispatch({ type: TYPE.FAIL_AUTH_LEADING, error }));
            }
          });
    }
};

export const setSignOut = ({ login }) => {
    return (dispatch) => {
        dispatch({ type: TYPE.FETCH_SIGN_OUT });

        return firebase.auth().signOut()
            .then(() => dispatch({
                type: TYPE.RECEIVE_SIGN_OUT,
                payload: { login }
            }))
            .catch((error) => dispatch({ type: TYPE.FAIL_SIGN_OUT, error }));
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