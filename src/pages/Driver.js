import React from 'react'
import Navbar from '../components/Myschool/Navigation'
import Sidebar from '../components/Myschool/Sidebar'
import StudentTable from '../components/Myschool/StudentTable'
import ParentsTable from '../components/Parents/ParentsTable'
import DriverTable from '../components/Driver/DriverTable'
import DriverSidebar from '../components/Driver/DriverSidebar'

const Driver = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <DriverSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <DriverTable/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default Driver