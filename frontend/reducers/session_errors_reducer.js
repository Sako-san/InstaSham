import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            if(action.errors === undefined) {return oldState;}
            return action.errors;
        case RECEIVE_CURRENT_USER:
            let newState = [];
            return newState;
        default:
        return oldState;
    }
}

export default sessionErrorsReducer;