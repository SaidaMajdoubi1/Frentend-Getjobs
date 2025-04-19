import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cardprofile({userData ,isOwnProfile }) {

    if (!userData) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="card border w-4/6 hover:shadow-none relative flex flex-col shadow-lg  m-10">
            <img
                className="max-h-20 w-full opacity-80 absolute top-0"
                style={{ zIndex: -1 }}
                src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                alt="#"
            />
            <div className="profile w-full flex m-3 ml-4 text-white">
                <img
                    className="w-28 h-28 p-1 bg-white rounded-full"
                    src={userData.profileImageUrl} // Assuming your user data has a profile image URL
                    alt="#"
                />
                <div className="title mt-11 ml-3 font-bold flex flex-col">
                    <div className="name break-words">{userData.name}</div>
                    <div className="text-gray-800 font-semibold text-sm italic">
                        {userData.job}
                    </div>
                    <div className="text-gray-600  break-words">
                        {userData.city}
                    </div>
                </div>
            </div>
            {isOwnProfile ? null : (
                <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                    <Link
                        to={`/message/${userData.id}`} className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                            Message
                    </Link>
                </div>
            )}
        </div>
    );
}
