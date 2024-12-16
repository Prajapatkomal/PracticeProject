import list from "../../../public/list.json"
import { Card } from "../Card"
import { Link } from "react-router-dom"

export const Courses = () => {
  return (
    <> 
    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-40 ">
       <div className="text-center space-y-5">
          <h1 className="text-2xl font-bold ">We're delighted to have you <span className="text-pink-500">Here !:)</span></h1>
          <p>Courses Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde perferendis iusto vero nisi! Nam magni quam aliquid nulla et cumque eos blanditiis natus inventore ea. Exercitationem repellendus tempora velit?
          </p>
          <Link to="/"><button className=" bg-pink-500 text-white rounded-md px-4 hover:bg-pink-800 duration-300 py-2 mt-5">Back</button></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  my-10 gap-10 ">
            {list.map((item)=>(
             <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>    
    </>
      )
}
