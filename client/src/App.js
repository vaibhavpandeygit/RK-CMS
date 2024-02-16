import './App.css';
import {Route, Routes } from "react-router-dom";

//routes imported
import Home from './Pages/Home';
import Service from './Pages/Service';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import TermsConditions from './Pages/TermsConditions';
import AdminLogin from './Pages/LoginPage/AdminLogin';
import EmployeeLogin from './Pages/LoginPage/EmployeeLogin';



function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/employeelogin' element={<EmployeeLogin/>}/>

          <Route path='/services' element={<Service/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms-conditions' element={<TermsConditions/>}/>
        </Routes>
    </div>
  );
}

export default App;
