import { UPDATE_USER } from '../actions/user-actions';

export default function userReducer(state = '', {
    type,
    payload
}) {
    
	// console.log("TCL: payload", payload.user);
    
    switch (type) {
        case UPDATE_USER:
            return payload.user;
        default:
            return state;
    }
}
