export const SHOW_MENU = '[SHOW_MENU] SHOW_MENU';


export const MenuHandlerAction = (show) =>{

    return{
        type: SHOW_MENU,
        payload : show
    }
}