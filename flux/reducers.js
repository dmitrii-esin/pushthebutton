import * as TYPE from '../const/actionTypes.js';

const initialState = {
  authType: '',
  credentials: { login: '', password: '' },
  playerList: [],
  isButtonPushed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case TYPE.SET_AUTH:
    // return {
    //   ...state,
    //   authType: action.payload.authType
    // }

    case TYPE.PROVIDE_CREDENTIALS:
    return {
      ...state,
      credentials: action.payload.credentials
    }

    // case TYPE.ADD_PLAYER:
    // return {
    //   ...state,
    //   playerList: [...state.playerList, action.payload.playerData]
    // }

    case TYPE.PUSH_THE_BUTTON:
    return {
      ...state,
      isButtonPushed: true
    }

    // case TYPE.RESET_ALL:
    // return {
    //   ...state,
    //   authType: '',
    //   credentials: { name: '', password: ''},
    //   playerList: [],
    //   isButtonPushed: false
    // }

    default:
      return state
  }
}