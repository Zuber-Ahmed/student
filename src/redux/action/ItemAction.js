import { ActionType } from "./ActionType"

export const setItem =(items)=>{

        return{
            type:ActionType.SET_ITEMS,
             payload:items
        }
}

export const selectedItem =(items)=>{

    return {
        type:ActionType.SELECTED_ITEMS,
        payload:items
    };
}

export const addItem =(item) =>{
        return{
            type:ActionType.SELECTED_ITEMS,
            payload:item
        }
}