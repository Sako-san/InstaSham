import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:

            if(action.errors === undefined) {return oldState;}
            return action.errors;
        case RECEIVE_CURRENT_USER:

            newState = [];
            return newState;
        default:
        return oldState;
    }
}

export default sessionErrorsReducer;