import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//routes imported
import Home from './Pages/Home';
import Login from './Pages/LoginPage/Login';
import Service from './Pages/Service';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
