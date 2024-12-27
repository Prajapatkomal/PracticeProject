import { useEffect, useState } from "react"
import { Card } from "../Card"
import { Link } from "react-router-dom"
import axios from "axios"
// import { useContext } from "react"
// import { TokenContext } from "../../context/tokenContext" 


export const Courses = () => {

  const [data,setdata] = useState([])
  // const {token} = useContext(TokenContext);
  const token = localStorage.getItem("Token")


  useEffect(()=>{

    const getData = async()=>{
        try {
          const res = await axios.get("http://localhost:4001/course")
          setdata(res.data)
          console.log(res.data)
        } catch (error) {
          console.log("Error:",error)
        }

    }
    getData()
  },[])
    

  return (
    <> 
   
    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-40 ">
    {token ? (<div>
      <div className="text-center space-y-5">
          <h1 className="text-2xl font-bold ">We're delighted to have you <span className="text-pink-500">Here !:)</span></h1>
          <p>Courses Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde perferendis iusto vero nisi! Nam magni quam aliquid nulla et cumque eos blanditiis natus inventore ea. Exercitationem repellendus tempora velit?
          </p>
          <Link to="/"><button className=" bg-pink-500 text-white rounded-md px-4 hover:bg-pink-800 duration-300 py-2 mt-5">Back</button></Link>
        </div>
       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  my-10 gap-10 ">
            {data.map((item)=>(
             <Card item={item} key={item.id}/>
            ))}
          </div> 
    </div>
     )  :
     <h1 className="text-2xl text-red-600 text-center mt-20">Please login to access this page</h1>

}
</div> 
    </>
      )
}
