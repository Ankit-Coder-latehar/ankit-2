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

const Banner = () => {
  return (
    <div className="flex flex-col h-screen top-0 left-0 absolute w-full m-0 p-0">
    {/* Navbar at the top */}
    <Navbar />

    <div className="flex flex-1">
      {/* Sidebar on the left */}
      <BannerSidebar/>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* <Header /> */}
        <ImageUploadSection/>
        {/* Add other content components here */}
      </div>
    </div>
  </div>
  )
}

export default Banner