export default function userReducer(state = '', {
    type,
    payload
}) {
    switch (type) {
        case 'updateUser':

            return payload;
        default:
            return state;
    }
}
