import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getProduct } from '../store/action/productAction'
import { Link } from 'react-router-dom'
import { FavoriteProductStatus } from '../Api/api'

function LowCategoryProduct() {

  let {id }= useParams();
    const Products = useSelector((state) =>state.allProduct.product);
    const DispatchProduct =useDispatch();

   

    useEffect (()=>{
      DispatchProduct(getProduct());
       
    },[])

    const downCategoryProducts = Products.filter ((item)=>{
      return item.downCategory == id && item.status ==1
    })
  
    console.log(downCategoryProducts);

    const AllCategoryProducts = Products.filter ((item)=>{
      return item.mainCategory == id && item.status ==1
    })
    console.log(AllCategoryProducts);
  
    


    const addFavorite = (id)=>{
      const findproduct = downCategoryProducts.find((item)=>{
          return item.id ==id
         
      })
      findproduct.favoriteProduct = 1;
      FavoriteProductStatus (findproduct)
  }
  const deleteFavorite = (id)=>{
      const findproduct = downCategoryProducts.find((item)=>{
          return item.id ==id
         
      })
      findproduct.favoriteProduct = 0;
      FavoriteProductStatus (findproduct)
  }
 
    
  return (
    <div>

<section className="products">
                <div className="container">
                    <div className="row">

                  
                 
                      {downCategoryProducts &&

                      downCategoryProducts.map((item)=>(
                      
                         
                               <div className="col-md-3 mb-3">
                        <div className="product">
                            <div className="product_image">
                            <Link to={`/productdata/${item.id}`} ><img src={item.image} alt=""/>  </Link>
                                
                               {item.favoriteProduct == 0 && <i onClick={()=>{addFavorite(item.id)}} className="fa-solid fa-heart image_favorite"></i>} 
                                {item.favoriteProduct ==1 && <i onClick={()=>{deleteFavorite(item.id)}} className="fa-solid fa-heart image_Delfavorite"></i>}
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
                       
                 
                      {AllCategoryProducts &&

                         AllCategoryProducts.map((item)=>(
                        
                         
                               <div className="col-md-3 mb-3">
                        <div className="product">
                            <div className="product_image">
                            <Link to={`/productdata/${item.id}`} ><img src={item.image} alt=""/>  </Link>
                                
                               {item.favoriteProduct == 0 && <i onClick={()=>{addFavorite(item.id)}} className="fa-solid fa-heart image_favorite"></i>} 
                                {item.favoriteProduct ==1 && <i onClick={()=>{deleteFavorite(item.id)}} className="fa-solid fa-heart image_Delfavorite"></i>}
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
}

export default LowCategoryProduct