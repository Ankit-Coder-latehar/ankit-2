import React from 'react'
import Navbar from '../components/Myschool/Navigation'
import Sidebar from '../components/Myschool/Sidebar'
import HelperTable from '../components/Helper/HelperTable'
import HelperSidebar from '../components/Helper/HelperSidebar'

const Helper = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <HelperSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <HelperTable/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default Helper