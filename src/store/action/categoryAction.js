import { actionType } from "./actionType/actionType"
import axios from "axios"



const categoryAction = (data)=>{ 
    return {
        type :actionType.Get_Category,
        payload:data
    }

}


const getCategory =  () =>{
 
      return async dispatch =>  {
        const {data} = await axios.get('https://react-project-50ee5-default-rtdb.firebaseio.com/category.json')
      
        let catArr = [];
        for(let key in data){
            data[key].id = key;
            catArr.push(data[key])
        }
        dispatch(categoryAction(catArr));
      }
                
    }

    export default getCategory;