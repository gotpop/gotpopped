import {UPDATE_USER} from '../actions/user-actions';

export default function userReducer(state = '', {
    type,
    payload
}) {
    switch (type) {
        case UPDATE_USER.user:
            return payload;
        default:
            return state;
    }
}
