import React from 'react'

export default function Aboutprofile({userData}) {
  return (
    <div className="card border w-4/6 hover:shadow-none relative flex flex-col shadow-lg m-10">
      <h1 className="text-2xl font-bold mb-4 text-center">About</h1>
      {userData ? (
        <div>
            <p className="text-lg mx-auto text-center">{userData.about}</p>
        </div>

        ) : (
        <p className="mx-auto text-center">Loading...</p>
      )}
    </div>
  )
}
