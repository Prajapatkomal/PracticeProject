import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";
// import { useContext } from "react";
// import { TokenContext } from "../context/tokenContext";

export const Login = () => {
  //  const {setToken} = useContext(TokenContext);

  const { register, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = async(data)=>{
    const  userInfo={
      email : data.email,
      password:data.password
    };
  

    await axios
    .post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
       if(res.data){
        //  setToken(res.data.token)
         localStorage.setItem("Token",res.data.token)
         document.getElementById("my_modal_3").close()
         window.location.reload()
         toast.success(res.data.message)
       }
    })
    .catch((err)=>{
      if(err.response){
        toast.error(err.response.data.message)
      }
    })
  } 

  return (<>
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white border">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          <h3 className="font-bold text-lg mb-5">Login</h3>
          <div className="space-y-1">
          <p>Email</p>
          <input className='border rounded-md px-2 dark:bg-slate-900 dark:text-white border' type='email' placeholder="email"
           {...register("email", { required: true })}
           /><br/>
           {errors.email && <span className="text-red-700">This field is required</span>}
          <p className="mt-3">Password</p>
          <input  className='border rounded-md px-2  dark:bg-slate-900 dark:text-white border' type='password' placeholder="password"
           {...register("password", { required: true })}
           /><br/>
           {errors.password && <span className="text-red-700 ">This field is required</span>}
           </div>
          <div className=" flex justify-around mt-5">
          <button className="bg-pink-500 hover:bg-pink-800  rounded-md text-white px-2 py-1" 
          >Login</button>
          <p>not registered? <Link to='/signup' className="underline text-red-700" onClick={()=>document.getElementById("my_modal_3").close()}>
          Signup</Link> </p> 
          </div>
          </form>
        </div>
      </dialog>
    </div>
    </>
  );
};
