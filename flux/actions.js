import * as TYPE from '../const/actionTypes';

export const provideCredentials = credentials => {
    return (dispatch) => {
        dispatch({
            type: TYPE.PROVIDE_CREDENTIALS,
            payload: { credentials } 
        })
    }
};

export const pushTheButton = () => {
    return (dispatch) => {
        dispatch({
            type: TYPE.PUSH_THE_BUTTON
        })
    }
};