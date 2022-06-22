import { useEffect,useState} from 'react';
import imgHouse from '../image/categories/house.svg';
import { useSelector,useDispatch } from 'react-redux';
import getCategory from '../store/action/categoryAction';
import { Link } from 'react-router-dom';
import { getProduct } from '../store/action/productAction';





const Categories = () => {

    

    const [downCategory,setDownCategory] =useState()
    const [downlengthCategory,setLengthDownCategory] =useState()
    const [categoryId,setCategoryId] =useState()

    const category =useSelector((state)=>state.allCategory.category)
    const dispatch = useDispatch();
    const products = useSelector((state) =>state.allProduct.product);
    const dispatchProduct =useDispatch();
   


    useEffect (()=>{
        dispatchProduct(getProduct());
       
    },[])


    useEffect(()=>{
    dispatch(getCategory())
    },[])

    const lowCategories = (id) => {
        setCategoryId(id)
        const findDownCategory = category.filter((item)=>{
            return item.topMenu == id
        })

        setDownCategory(findDownCategory)

       findDownCategory.map((data)=>{
        const lengthCategory = products.filter ((item)=>{
            return item.downCategory == data.id && item.status == 1
        })
        data.count = lengthCategory.length
         

      
        })
 

        

     

        const allLengthcategory = products.filter ((item)=>{
            return item.mainCategory == id && item.status == 1

        })
        setLengthDownCategory(allLengthcategory)
        



    }



 let categoryCard = document.querySelectorAll('.categories-card');
    // activ clasini her bir category card ucun gezdirirem 
    categoryCard.forEach( (item)=>{
              item.addEventListener('click', function(){
                categoryCard.forEach(cat=>cat.classList.remove('akt'));
                  this.classList.add('akt');
                  document.querySelector('.card-flex_active').classList.add('active');
              })
          } )
    

          // akt olan clasi tapib hem akti hemde active silirem
    let activCategory = document.querySelector('.akt');
   if(activCategory){
    activCategory.addEventListener('click', function(){
        document.querySelector('.card-flex_active').classList.remove('active');
        this.classList.remove('akt')
    })

   }




    return (
        <div>
            {/*-- --------------- CATEGORIES --------------- --*/}
            <section className="categories">
                <div className="container">
                    <div className="card-flex" >
                       
                        {category && 
                        category.map((item,i)=>(
                            item.topMenu ==0 &&

                            <div className="categories-card" key={i}  onClick={()=>{lowCategories(item.id)}}>
                            <div className="categories_circle"  >
                                <img src={imgHouse} alt=""/>
                            </div >
                            <span className="categories_span">{item.category}</span>
                        </div>

                        ))
                        }
                    </div>

                    <div className='card-flex_active' >
                    <div className="row">
                  {downlengthCategory &&   <Link to={`/lowproductdata/${categoryId}`}>Butun elanlar({downlengthCategory.length})</Link>}
                    <hr />
               {downCategory &&
               downCategory.map((item,i)=>(
                
                
                    <div className="col-4 mb-3" key={i}>
                        <Link to={`/lowproductdata/${item.id}`} >{item.category}({item.count})</Link>
                    
                    </div>
                   
             
           
               ))
               
               }
                  </div>
                </div>
                </div>
              
            </section>
        </div>
    );
};

export default Categories;