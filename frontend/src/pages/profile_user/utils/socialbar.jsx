import React from 'react'

export default function Socialbar({userData}) {
 
  return (

<div className="max-w-screen w-96 mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-12 lg:float-right lg:mr-12">
      <div className="bg-gray-100 px-4 py-2 lg:text-center">
        <h2 className="text-lg font-medium text-gray-800">Social Media </h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
       {/* {userData.linkdin && ( */}
          <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
                <svg class="h-8 w-8 text-gray-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>           </span>
            <span className="text-lg font-medium text-gray-800">{/*{userData.linkdin}*/}</span>
          </div>
         {/*)}*/}
        {/* {userData.twitter && (*/}
          <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
                <svg class="h-8 w-8 text-gray-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>            </span>
            <span className="text-lg font-medium text-gray-800">{/*{userData.twitter}*/}</span>
          </div>
       {/*  )}*/}
       {/*  {userData.website && (*/}
          <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
                <svg class="h-8 w-8 text-gray-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
            </span>
            <span className="text-lg font-medium text-gray-800">{/*{userData.website}*/}</span>
          </div>
        {/* )}*/}
      </div>
    </div>
  )
}
