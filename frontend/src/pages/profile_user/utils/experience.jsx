
import React from "react";
import img from "../../../assets/me.png";

export default function Experience({ userData }) {
    if (!userData) {
        return <div>Loading...</div>; 
    }
    return (
        <div>
            
                <div  className="card border w-4/6 hover:shadow-none relative flex flex-col shadow-lg m-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
            {/* {userData.map((experience, index) => ( */}
                    <div /*key={index} */ className="w-full rounded-xl p-1 shadow-2x2 shadow-blue-200 md:w-8/12 lg:w-full bg-white">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                            <div className="grid-cols-1 lg:col-span-3">
                                <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                                    <img src={img} alt="User Image" />
                                </div>
                            </div>
                            <div className="col-span-1 lg:col-span-9 ">
                                <div className="text-center lg:text-left">
                                    <p className="mt-2 font-semibold text-zinc-500"> Company :{/*{experience.companyName}*/}</p>
                                    <p className="mt-2 font-semibold text-zinc-500"> date :{/*{experience.date}*/}</p>
                                    <p className="mt-2 font-semibold text-zinc-600">city :{/*{experience.city}*/}</p>
                                    <p className="mt-2 font-semibold text-zinc-500">about : {/*{experience.about}*/}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         {/*   ))}*/}
        </div>
    );
}
