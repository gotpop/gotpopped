export const UPDATE_COMPONENT = 'component:updateComponent';

export function updateComponent(updateComponentStatus) {
    return {
        type: UPDATE_COMPONENT,
        payload: {
            updateComponent: updateComponentStatus
        }
    }
}
