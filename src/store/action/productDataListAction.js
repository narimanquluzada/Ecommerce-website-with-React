import { actionType } from "./actionType/actionType";
import axios from "axios";


const productDataAction = (data) =>{
    return {
        type:actionType.Get_Data_With_Id,
        payload:data,
    }
}

export const getDatawithId =  (id)=>{
   return async dispatch =>{
    const {data}= await axios.get( `https://react-project-50ee5-default-rtdb.firebaseio.com/products/${id}.json`);

 dispatch(productDataAction(data))
 
   }

      
   }
