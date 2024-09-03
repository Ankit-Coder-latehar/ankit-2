import React from 'react'
import Navbar from '../components/Myschool/Navigation'
import Sidebar from '../components/Myschool/Sidebar'
import HelperTable from '../components/Helper/HelperTable'
import NoticeTable from '../components/Notice/NoticeTable'
import RemainderTable from '../components/Remainder/RemainderTable'
import ReportTable from '../components/Report/ReportTable'
import ReportSidebar from '../components/Report/ReportSidebar'
import ImageUploadSection from '../components/Banner/BannerTable'
import BannerSidebar from '../components/Banner/BannerSidebar'
import InvoiceTable from '../components/Bills/BillsTable'
import BillSidebar from '../components/Bills/BillSidebar'
import { Router } from 'react-router-dom'
import RouteSidebar from '../components/Route/RouteSidebar'
import TripForm from '../components/Route/RouteTable'
import RouteInfoTable from '../components/MyRoutes/Myroutes'

const MyRoute = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <RouteSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <RouteInfoTable/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default MyRoute;