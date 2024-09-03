import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myschool from './pages/Myschool';
import Students from './pages/Students';
import Class from './pages/Class';
import Teacher from './pages/Teacher';
import Parents from './pages/Parents';
import Driver from './pages/Driver';
import Helper from './pages/Helper';
import Notice from './pages/Notice';
import Remainder from './pages/Remainder';
import Announcement from './pages/Announcement';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import TripReport from './pages/TripReport';
import AttendanceReport from './pages/AttendanceReport';
import Banner from './pages/Banner';
import Bill from './pages/Bills';
import BusRoute from './pages/Route';
import MyRoute from './pages/My-routes';
import CreateTable from './components/CreateRoutes/CreateTable';
import CreateRoute from './pages/CreateRoute';
import DashboardReport from './pages/DashboardReport';
import DistanceReport from './pages/DistanceReport';
import IgnitionReport from './pages/IgnitionReport';
import SpeedReport from './pages/SpeedReport';
import RelayEngineReport from './pages/RelayEngine';
import GeofenceReport from './pages/Geofence';
import StopageReport from './pages/Stopage';
import Location from './pages/Location';
import Alert from './pages/Alert';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import School from './pages/School';
import Bus from './pages/Bus';
import Vehicle from './pages/Vehicle';
import Realtime from './pages/Realtime';



function App() {
  return (
    <Router>
      <div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Myschool />} />
            <Route path="/school" element={<Myschool />} />
            <Route path="/student" element={<Students />} />
            <Route path="/class" element={<Class />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/parents" element={<Parents/>} />
            <Route path="/driver" element={<Driver/>} />
            <Route path="/helper" element={<Helper/>} />
            <Route path="/notice" element={<Notice/>} />
            <Route path="/remainder" element={<Remainder/>} />
            <Route path="/announcement" element={<Announcement/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/tripreport" element={<TripReport/>} />
            <Route path="/attendance-report" element={<AttendanceReport/>} />
            <Route path="/banner" element={<Banner/>} />
            <Route path="/bills" element={<Bill/>} />
            <Route path="/route" element={<BusRoute/>} />
            <Route path="/my-route" element={<MyRoute/>} />
            <Route path="/create-route" element={<CreateRoute/>} />
            <Route path="/dashboard-report" element={<DashboardReport/>} />
            <Route path="/distance-report" element={<DistanceReport/>} />
            <Route path="/ignition-report" element={<IgnitionReport/>} />
            <Route path="/speed-report" element={<SpeedReport/>} />
            <Route path="/relay" element={<RelayEngineReport/>} />
            <Route path="/geofence" element={<GeofenceReport/>} />
            <Route path="/stopage" element={<StopageReport/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/alert" element={<Alert/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/schools" element={<School/>} />
            <Route path="/bus" element={<Bus/>} />
            <Route path="/vehicle" element={<Vehicle/>} />
            <Route path="/realtime" element={<Realtime/>} />


































            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

