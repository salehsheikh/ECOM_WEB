import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/login';
import CheckoutSuccess from './components/auth/CheckoutSuccess';
const App = () => {
  return (
    <div className='App'>
    <BrowserRouter >
    <ToastContainer/>
    <Navbar/>
    <div className='content-container'>
      <Routes>
        <Route path="/cart"  element={<Cart/>}/> 
        <Route path="/checkout-success"  element={<CheckoutSuccess/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/"  exact element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
