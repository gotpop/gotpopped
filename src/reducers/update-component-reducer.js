import { UPDATE_COMPONENT } from '../actions/update-component-actions';

export default function updateComponentReducer(state = Boolean, {
    type,
    payload
}) {
    switch (type) {
        case UPDATE_COMPONENT:
        return payload.updateComponent;
        default:
            return state;
    }
}
