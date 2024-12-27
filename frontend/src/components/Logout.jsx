import toast from 'react-hot-toast'

const Logout = () => {

    const handleLogout = ()=>{
       try {
        localStorage.removeItem("Token")
        window.location.reload()
        toast.success("User Loggedout successfully")
       } catch (error) {
          toast.error("Error:",error.message)
       }
    }

  return (
    <div >
     <button className="bg-red-600 text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-slate-800 duration-300"
     onClick={handleLogout}
     >Logout</button>
    </div>
  )
}

export default Logout