import { useState } from "react";
import { Card } from "./Card";
import { useEffect } from "react";
import axios from "axios"

export const Freebook = () => {
  const [data,setdata] = useState([])

  useEffect(()=>{
    const getData = async()=>{
      const res = await axios.get("http://localhost:4001/book")
      setdata(res.data)
     }
     getData()
  },[])
  
  const filterdata = data.filter((data) => data.category === "free");

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-20 space-y-5">
        <div>
        <h1 className="text-2xl font-bold">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          maiores delectus impedit nihil numquam autem adipisci, rerum odio
          iusto fugiat voluptatem ratione neque asperiores! Laudantium quaerat
          eos voluptatibus praesentium deleniti.
        </p>
      </div>
      <div className="flex gap-5">
      {filterdata.map((item) => (
          <Card item={item} key={item.id}  />
        ))}
      </div>
  </div>
    </>
  );
};
