import { ActionType } from "../action/ActionType";

const initialState ={
        stdData:[],
        stdDataWithTag:[]

}

export const studentReducer=(state=initialState, {type,payload})=>{

        switch(type){
            case ActionType.SET_ITEMS:
                return {...state, stdData:payload}
                break;
            case ActionType.SELECTED_ITEMS:
                    return{
                        ...state, 
                        stdDataWithTag:[payload,...state.stdDataWithTag]
                    }
                break;
                default: return state;
        }
        return state;
        
    }
    
    

