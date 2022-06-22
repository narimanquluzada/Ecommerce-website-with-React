import { actionType } from "../action/actionType/actionType";

const initialValue ={
    product :[]
}

const productReducer = (state =initialValue,{type,payload}) =>{
    switch (type) {
        case actionType.Get_Product:
            return {...state ,product :payload}
    
        default:
           return state
    }

}


export default productReducer