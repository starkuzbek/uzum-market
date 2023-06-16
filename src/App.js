import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './router/home/Home'
import Wishlist from './router/wishlist/Wishlist'
import Cart from './router/cart/Cart';
import Login from './router/login/Login';
import ProductInfo from './router/product-info/ProductInfo';
// import SingleRoute from './router/singleroute/SingleRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/wishlist"} element={<Wishlist/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/login"} element={<Login/>}/>

        {/* <Route path='/product/:id' element={<SingleRoute/>}/> */}
        <Route path='/product/:id' element={<ProductInfo/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;