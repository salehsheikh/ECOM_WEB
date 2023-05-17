import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { registerUser } from "../../features/authSlice";
import { StyleFom } from "./styledForm";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(()=>{
        if(auth._id){
            navigate("/cart")
        }
    },[auth._id,navigate]);
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch( registerUser(user));

    }
  return (
    <>
    <StyleFom onSubmit={handleSubmit}> 
        <h2>Register</h2>
        <input type="text" name="" id="1"  placeholder="name"
         onChange={(e)=>setUser({...user,name:e.target.value})}
         />
        <input type="email" name="" id="2" placeholder="email" 
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <input type="password" name="" id="3" placeholder="password" 
        onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button> {auth.registerStatus==="pending"?"submitting":"Register" }
        </button>
        {auth.registerStatus==="rejected"?
        (
            <p>{auth.registerError}</p>
        ):null}
      
    </StyleFom>
    </>
  );
}

export default Register;
