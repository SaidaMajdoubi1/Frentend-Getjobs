import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle,AiOutlineEnvironment,AiOutlineSchedule  } from "react-icons/ai";


export default function JobCreate() {
  return (
    <>
    <div className="searchDiv grid gap-10 p-12 bg-sky-100">
      <div className=" align-text-top  font-sans font-custom text-4xl  ml-80">
        Find your <strong className=' text-green-600'>dream job !</strong>
      </div>



      <form action="" method="">

        <div className="firstDiv flex justify-between items-center 
        rounded-[8px] gap-5 bg-white p-5 shadow-lg shadow-gray-700">

          <div className="flex items-center gap-2">
            <AiOutlineSearch className="text-2xl cursor-pointer" />
            <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Search job here ..." />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6]  hover:text-textColor icon cursor-pointer" />
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineEnvironment className="text-2xl cursor-pointer" />
            <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Search by Cities ..." />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6]  hover:text-textColor icon cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
  <AiOutlineSchedule className="text-2xl cursor-pointer" />
  <select className="bg-transparent focus:outline-none w-full">
    <option value="" disabled selected>Select Category</option>
    <option value="category1">Category 1</option>
    <option value="category2">Category 2</option>
    <option value="category3">Category 3</option>
    
  </select>
  <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer" />
</div>

           <button className="bg-green-600 hover:bg-blue-200 text-white font-semibold py-2 px-4 rounded">Search</button>
        </div>
      </form>

    </div>
    
    
   
    </>
  );
}
