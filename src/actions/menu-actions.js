export const UPDATE_MENU = 'menu:updateMenu'; 

export function updateMenu(menuStatus) {
    return {
        type: UPDATE_MENU,
        payload: {
            menu: menuStatus            
        }
    }
}
