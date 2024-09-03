import React from 'react'
import Navbar from '../components/Myschool/Navigation'
import Sidebar from '../components/Myschool/Sidebar'
import HelperTable from '../components/Helper/HelperTable'
import NoticeTable from '../components/Notice/NoticeTable'
import DashBoardNavbar from '../components/Dashboard/DashboardNavbar'
import DashboardSidebar from '../components/Dashboard/DashboardSidebar'
import DashboardGraph from '../components/Dashboard/DashBoardGraph'
import SchoolNavbar from '../components/School/SchoolNavbar'
import SchoolSidebar from '../components/School/SchoolSidebar'
import SchoolDashboard from '../components/School/SchoolDashboard'
import SchoolsDashboard from '../components/School/SchoolDashboard'
import DashBoardSidebar from '../components/Dashboard/DashboardSidebar'

const School = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar/>

    <div className="flex flex-1">
      {/* Sidebar on the left */}
        <DashBoardSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
          <SchoolsDashboard/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default School