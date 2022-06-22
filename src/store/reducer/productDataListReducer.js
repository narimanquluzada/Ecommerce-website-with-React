import { actionType } from "../action/actionType/actionType";


const productDataList = (state = "",{type,payload}) => {
    switch (type) {
        case actionType.Get_Data_With_Id:
            return payload
    
        default:
            return state
           
    }

}

export default productDataList