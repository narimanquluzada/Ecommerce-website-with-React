import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import productDataList from "./productDataListReducer";



const rootReducer =combineReducers({
   allCategory: CategoryReducer,
   allProduct :productReducer,
   oneproduct:productDataList,
   
  
});

export default rootReducer;