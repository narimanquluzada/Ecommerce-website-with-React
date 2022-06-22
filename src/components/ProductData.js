import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDatawithId } from '../store/action/productDataListAction';
import { useSelector,useDispatch } from 'react-redux';

function ProductData() {
    let {id} = useParams();
    const oddProduct = useSelector((state)=>state.oneproduct)
    console.log(oddProduct);
    const dispatchProduct =useDispatch();

    useEffect (()=>{
        dispatchProduct(getDatawithId(id));
       
    },[])

    
  return (
    <div>
    <div className="view-products">
        <div className="view-products_coteqories-title">
            <div className="container"></div>
        </div>
        <div className="view-products_image">
            <div className="container">
                <div className="view-products_image-container">
                    <img src={oddProduct.image}/>
                </div>
            </div>
        </div>
        <div className="view-products_context-title">
            <div className="container">
                <div className="view-products_context-title_flex">
                    <div className="price">
                        <div className="price-width">
                            <div className="price-width_position">
                                <span className='price-one'>{oddProduct.price}</span>
                                <span className='price-two'>azn</span>
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <h1>{oddProduct.title}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="view-products_context-body">
            <div className="container d-flex">
                <aside className='aside'>
                    <div className="author">
                        <a className="author_phone" href="">(070) 684-36-36</a>
                        <div className="author_name">Seymur</div>
                        <a className="author_profile" href="">İstifadəçinin bütün elanları</a>
                    </div>
                    <button className="message">
                        <i className="fa-solid fa-comment-dots"></i>Mesaj yaz
                    </button>
                    <div className="time">
                        <p>Elanın nömrəsi:33548678</p>
                        <p>Baxışların sayı: 231</p>
                        <p>Yeniləndi: Bugün, 12:08</p>
                    </div>
                    <div className="bookmaking">
                        <i className="fa-solid fa-heart"></i><a href="">Seçilmişlərə əlavə et</a>
                    </div>
                    <div className="report">
                        <i className="fa-solid fa-flag"></i><a href="">Elandan şikayət et</a>
                    </div>
                </aside>
                <main className="main">
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="col">Adi</th>
                            <th scope="col">{oddProduct.title}</th>
                        </tr>
                        <tr>
                            <th scope="col">Qiymeti</th>
                            <th scope="col">{oddProduct.price}</th>
                        </tr>
                        <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr>
                        <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr>
                        <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr>
                        </tbody>
                    </table>
                    <p >{oddProduct.context}</p>
                   
                </main>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default ProductData