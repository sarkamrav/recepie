import recepieactiontype from './recepietype';
import {cartitem } from './util'
const initial_state ={
    userErrorMessage:'',
    adminErrorMessage:'',
    userLoggedIn:false,
    adminLoggedIn:false,
    cartitems:[],
    recepiecollection:[]
}

export const recepieReducer = (state =initial_state,action) =>{
    switch(action.type){
        case recepieactiontype.USER_FETCH_DATA : 
        return{
           ...state ,
           recepiecollection:action.payload
        }
        case recepieactiontype.USERVALID : 
        return{
           ...state ,
           userLoggedIn:true
        }
        case recepieactiontype.ADMINVALID : 
        return{
           ...state ,
           adminLoggedIn:true
        }
        case recepieactiontype.USERADDCART : 
        return{
           ...state ,
           cartitems:cartitem(state.cartitems,action.payload)

        }
        case recepieactiontype.USERINVALIDC : 
        return{
           ...state ,
           userLoggedIn:false,
           userErrorMessage:action.payload
        }
        case recepieactiontype.ADMININVALIDC : 
        return{
           ...state ,
           adminLoggedIn:false,
           adminErrorMessage:action.payload
        }
            default:
            return state;
        }
    };

