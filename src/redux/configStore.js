
import {createStore,combineReducers} from 'redux'
import {studentReducer} from './reducer/dataReducer'

export const configStore=()=>{
    const Store=createStore(combineReducers({studentReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
    return Store;

}