import React from 'react'
import Navbar from '../components/Myschool/Navigation'
import Sidebar from '../components/Myschool/Sidebar'
import ClassCard from '../components/Class/ClassCard'
import ClassSidebar from '../components/Class/ClassSidebar'

const Class = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <ClassSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <ClassCard/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default Class