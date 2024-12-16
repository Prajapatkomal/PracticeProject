import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export const Signup = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (<>
    <div className='flex h-screen items-center justify-center  '>
    <div className='w-[600px]' >
        <div className="modal-box ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link  to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          <h3 className="font-bold text-lg mb-5">Signup</h3>
          <div className='space-y-1'>
          <p>Name</p>
          <input className='border rounded-md px-2 mb-5' type='text' placeholder="Enter your fullname"
           {...register("name", { required: true })}
           />
           <br/>
           {errors.name && <span className="text-red-700 ">This field is required</span>}

          <p className='pt-5'>Email</p>
          <input className='border rounded-md px-2 ' type=' email' placeholder="Enter your email"
           {...register("email", { required: true })}
           />
           <br/>
           {errors.email && <span className="text-red-700 ">This field is required</span>}

          <p className='pt-5'>Password</p>
          <input  className='border rounded-md px-2 ' type='password' placeholder="Enter your password"
           {...register("password", { required: true })}/>
           <br/>
           {errors.password && <span className="text-red-700 ">This field is required</span>}<br/>
          </div>
          <div className=" flex justify-around">
          <button className="bg-pink-500 hover:bg-pink-800  rounded-md text-white px-2 py-1">Signup</button>
          <p>Have Account? <Link to='/' className='underline text-blue-600'>Login</Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
