import * as TYPE from '../const/actionTypes.js';

const initialState = {
    isAuthFetching: false,
    currentUserData: {
        login: '',
        authType: '',
        isButtonPushed: false
    },
    playerList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_AUTH_PLAYER:
    return {
        ...state,
        isAuthFetching: true
    }

    case TYPE.RECEIVE_AUTH_PLAYER:
    return {
        ...state,
        isAuthFetching: false,
        currentUserData: {
            login: action.payload.login,
            authType: action.payload.authType,
            isButtonPushed: false
        },
        playerList: state.playerList.push(
            {login: action.payload.login, status: action.payload.status}
        ) 
    }

    case TYPE.FAIL_AUTH_PLAYER:
    return {
        ...state,
        isAuthFetching: false
    }

    case TYPE.FETCH_AUTH_LEADING:
    return {
        ...state,
        isAuthFetching: true
    }

    case TYPE.RECEIVE_AUTH_LEADING:
    return {
        ...state,
        isAuthFetching: false,
        currentUserData: {
            login: action.payload.login,
            authType: action.payload.authType
        },
    }

    case TYPE.FAIL_AUTH_LEADING:
    return {
        ...state,
        isAuthFetching: false
    }

    case TYPE.FETCH_SIGN_OUT:
    return {
        ...state,
        isAuthFetching: true
    }

    case TYPE.RECEIVE_SIGN_OUT:
    return {
        ...state,
        isAuthFetching: false,
        currentUserData: {
            login: '',
            authType: '',
            isButtonPushed: false
        },
        playerList: state.playerList.filter(player => player.login !== action.payload.login)
    }

    case TYPE.FAIL_SIGN_OUT:
    return {
        ...state,
        isAuthFetching: false
    }

    case TYPE.PUSH_THE_BUTTON:
    return {
        ...state,
        currentUserData: Object.assign(
            {},
            state.currentUserData,
            { isButtonPushed: true }
        ),
        playerList: state.playerList.map(player => player.login === action.payload.login 
            ? {login: player.login, status: action.payload.status}
            : player
        )
    }

    case TYPE.RESET_PLAYER_LIST:
    return {
        playerList: []
    }

    case TYPE.RESET_ALL:
    return {
        isAuthFetching: false,
        currentUserData: {
            login: '',
            authType: '',
            isButtonPushed: false
        },
        playerList: []
    }

    default:
      return state
  }
}