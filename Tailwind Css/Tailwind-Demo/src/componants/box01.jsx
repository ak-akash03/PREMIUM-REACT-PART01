import React from 'react'

function Box01() {
  return (
      <>
      <div className="grid place-content-center h-screen">
        {/* <h1 className="text-yellow-500 text-4xl m-6">Akash</h1> */}

        <div className="p-6 max-w-sm bg-white rounded-xl text-black flex items-center space-x-4">
          <div className="image py-5">
            <img
              className="h-12 w-12"
              src="https://ak-akash03.github.io/personal-portfolio/assets/img/team/AK%20DP%20IMAGE%2001.jpg"
              alt="jpg"
            />
          </div>
          <div className="contain">
            <div className="text-2xl font-medium">
              Hello Ak
              <p className="text-slate-600 text-xl">by theproteam</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box01