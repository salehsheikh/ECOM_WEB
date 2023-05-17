import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { loginUser } from "../../features/authSlice";
import { StyleFom } from "./styledForm";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(()=>{
        if(auth._id){
            navigate("/cart")
        }
    },[auth._id,navigate]);
    const[user,setUser]=useState({
      
        email:"",
        password:"",
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch( loginUser(user));

    }
  return (
    <>
    <StyleFom onSubmit={handleSubmit}> 
        <h2>Login</h2>
        
        <input type="email" name="" id="2" placeholder="email" 
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <input type="password" name="" id="3" placeholder="password" 
        onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button> {auth.loginStatus==="pending"?"submitting":"Login" }
        </button>
        {auth.loginStatus==="rejected"?
        (
            <p>{auth.loginError}</p>
        ):null}
      
    </StyleFom>
    </>
  );
}

export default Login;
