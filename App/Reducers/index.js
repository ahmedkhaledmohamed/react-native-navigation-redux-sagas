/**
 * Created by stan229 on 5/27/16.
 */
import NavReducer from './navReducer.js'
import { combineReducers } from "redux";
import userData from "./userData";


export default function getRootReducer() {
    return combineReducers({
        nav: NavReducer,
        userData: userData
    });
}
