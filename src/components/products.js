import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getProduct } from '../store/action/productAction';
import { FavoriteProductStatus } from '../Api/api';
import { Link } from 'react-router-dom';


const Products = () => {

   
 
    const products = useSelector((state) =>state.allProduct.product);
    const dispatchProduct =useDispatch();

   

    useEffect (()=>{
        dispatchProduct(getProduct());
        
       
    },[products])


    const addFavorite = (id)=>{
      
        const findproduct = products.find((item)=>{
            return item.id === id   
        })
        findproduct.favoriteProduct = 1;

        let favoriteProdactLocal;
        if (localStorage.getItem("favoriteProdactLocal") === null) {
     favoriteProdactLocal =[]
            
        } else {
            favoriteProdactLocal = JSON.parse(localStorage.getItem("favoriteProdactLocal"))   
        }

        favoriteProdactLocal.push(findproduct)
     localStorage.setItem("favoriteProdactLocal",JSON.stringify(favoriteProdactLocal))
  
    
     
    }
    const deleteFavorite = (i)=>{
     
        localPro.splice(i,1);
        localStorage.setItem('favoriteProdactLocal', JSON.stringify(localPro));

    }
   


 
   
let localPro = JSON.parse(localStorage.getItem("favoriteProdactLocal"));

   console.log(localPro);

    return (
        <div>
            {/*-- --------------- PRODUCTS --------------- --*/}
            <section className="products">
                <div className="container">
                    <div className="row">
                        
                      {products &&
                      products.map((item)=>(
                          item.status == 1 &&
                         
                               <div className="col-md-3 mb-3">
                        <div className="product">
                            <div className="product_image">
                            <Link to={`/productdata/${item.id}`} ><img src={item.image} alt=""/>  </Link>
                                
                            { localPro && localPro.map((data, i)=>{
                                return  data.id == item.id &&
                                data.favoriteProduct == 1 && <i onClick={()=>{deleteFavorite(i)}} className="fa-solid fa-heart image_Delfavorite"></i> 
                            })}
                                {item.favoriteProduct == 0 && <i onClick={()=>{addFavorite(item.id)}} className="fa-solid fa-heart image_favorite"></i>} 
                            </div>
                            <div className="product_price">
                                <span className="product_price_val">{item.price}</span>
                                <span className="product_price_cur">AZN</span>
                            </div>
                            <div className="product_name">{item.title}</div>
                            <div className="product_created">{item.date}</div>
                        </div>
                    </div>
                        
                   
                      ))
                      }
                    </div>
                </div>
            </section>
        </div>
    )
        ;
};

export default Products;