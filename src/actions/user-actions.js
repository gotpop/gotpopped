export const UPDATE_USER = 'users:updateUser'; 

export function updateUser(newUser) {
	console.log("TCL: updateUser -> newUser", newUser)
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser            
        }
    }
}
