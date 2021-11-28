import { createStore } from 'redux';
import { MenuHander } from './reducers';


export const menuHandlerStore = createStore(MenuHander)