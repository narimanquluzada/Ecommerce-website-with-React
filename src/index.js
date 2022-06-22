import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import './style.css'
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import AddProducts from "./components/addProducts";
import ProductData from './components/ProductData';
import FavoriteProducts from './components/FavoriteProducts';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import LowCategoryProduct from './components/lowCategoryProduct';


const store =createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk),
))
const Index = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signIn' element={<SignIn/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/addProducts' element={<AddProducts/>}/>
                    <Route path='/favorites' element={<FavoriteProducts/>}/>
                    <Route path='/productdata/:id' element={<ProductData/>}/>
                    <Route path='/lowproductdata/:id' element={<LowCategoryProduct/>}/>
                </Routes>
            </Router>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><Index/></Provider>);