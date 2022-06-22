import axios from "axios";



export const FavoriteProductStatus = async (product)=>{
    console.log(product);
    const data= await axios.put( `https://react-project-50ee5-default-rtdb.firebaseio.com/products/${product.id}.json`, 
    product
       );
       console.log(data);

       return data;
   }


   
