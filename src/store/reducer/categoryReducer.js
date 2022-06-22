import { actionType } from "../action/actionType/actionType"
const initialstate ={
        category :[]
  
}

 const CategoryReducer = (state=initialstate,{type,payload}) =>{
    switch(type){
        case actionType.Get_Category :
        return {...state,category :payload};

        default :
        return state;
    }



}


export default CategoryReducer