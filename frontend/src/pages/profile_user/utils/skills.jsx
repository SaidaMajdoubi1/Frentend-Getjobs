import React from "react";

export default function Skills({userData}) {
    if (!userData) {
        return <div>Loading...</div>; 
    }
   
    return (


        <div className="card border w-4/6 hover:shadow-none relative flex flex-col shadow-lg m-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Skills</h1>
                <div className="flex gap-3 flex-wrap justify-center text-lg">
                {/* {userData.map((skill, index) => ( */}
                    <p /*key={index} */ className="text-center my-2 inline-block w-40 rounded-full bg-green-600 bg-opacity-10 px-4 py-2 font-semibold text-green-800 duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-48">
                        swiim {/*{skill.Name}*/}
                    </p>
                
            {/*   ))}*/}
</div>
        </div>

    );
}
