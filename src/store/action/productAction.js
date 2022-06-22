import { actionType } from "./actionType/actionType";
import axios from "axios";


const productAction = (product) =>{
    return {
        type:actionType.Get_Product,
        payload:product
    }
}


export const getProduct =()=>{

    return async dispatch =>{
        const {data} = await axios.get('https://react-project-50ee5-default-rtdb.firebaseio.com/products.json')
         
        let dataList =[]
        for (let key in data){
            data[key].id=key
            dataList.push(data[key])
        }
        dispatch(productAction(dataList))

    }
}

