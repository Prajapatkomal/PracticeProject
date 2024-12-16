import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (<>
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          <h3 className="font-bold text-lg mb-5">Login</h3>
          <div className="space-y-1">
          <p>Email</p>
          <input className='border rounded-md px-2' type='email' placeholder="email"
           {...register("email", { required: true })}
           /><br/>
           {errors.email && <span className="text-red-700">This field is required</span>}
          <p className="mt-3">Password</p>
          <input  className='border rounded-md px-2 ' type='password' placeholder="password"
           {...register("password", { required: true })}
           /><br/>
           {errors.password && <span className="text-red-700 ">This field is required</span>}
           </div>
          <div className=" flex justify-around mt-5">
          <button className="bg-pink-500 hover:bg-pink-800  rounded-md text-white px-2 py-1">Login</button>
          <p>not registered? <Link to='/signup' className="underline text-red-700">Signup</Link> </p> 
          </div>
          </form>
        </div>
      </dialog>
    </div>
    </>
  );
};
