import { SHOW_MENU } from "./actions";

export const MenuHander = (state=[] ,action) =>{

    switch(action.type){
        case SHOW_MENU :
            return[action.payload];
        default:
            return state;
    }

} 