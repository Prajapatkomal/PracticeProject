import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        if(err.response){
          toast.error(err.response.data.message)
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px] ">
          <div className="modal-box dark:bg-slate-900 dark:text-white border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg mb-5">Signup</h3>
              <div className="space-y-1">
                <p>Name</p>
                <input
                  className="border rounded-md px-2 mb-5  dark:bg-slate-900 dark:text-white border"
                  type="text"
                  placeholder="Enter your fullname"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-700 ">This field is required</span>
                )}

                <p className="pt-5">Email</p>
                <input
                  className="border rounded-md px-2  dark:bg-slate-900 dark:text-white border"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-700 ">This field is required</span>
                )}

                <p className="pt-5">Password</p>
                <input
                  className="border rounded-md px-2  dark:bg-slate-900 dark:text-white border"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-700 ">This field is required</span>
                )}
                <br />
              </div>
              <div className=" flex justify-around">
                <button className="bg-pink-500 hover:bg-pink-800  rounded-md text-white px-2 py-1"
                 onClick={()=>document.getElementById("my_modal_3").close()}>
                  Signup
                </button>
                <p>
                  Have Account?{" "}
                  <Link to="/" className="underline text-blue-600">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
