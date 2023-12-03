import Home from "./components/homepage/homepage"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Events from "./components/events/events"
import Footer from "./components/footer/footer"
import {Router, Routes, Route , BrowserRouter} from 'react-router-dom'
import Courses from "./components/education/education"
import Admin_login from "./components/admin/admin_login/admin_login"
import Admin_home from "./components/admin/admin_home/admin_home"
import Admin_medlemmar from "./components/admin/admin_medlemmar/admin_medlemmar"
import Admin_hantera from "./components/admin/admin_hantera/admin_hantera"
import './App.css'
import './components/nav/nav.css'
import './components/homepage/homepage.css'
import './components/about/about.css'
import './components/education/education.css'
import './components/events/events.css'
import './components/footer/footer.css'
import "./components/admin/admin_login/admin_login.css"
import "./components/admin/admin_home/admin_home.css"
import "./components/admin/admin_medlemmar/admin_medlemmar.css"
import "./components/admin/admin_hantera/admin_hantera.css"


function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/events" element={<Events/>}/>
            {/* <Route path="/hall-of-fame" element={<Hall_of_fame/>}/> */}
            <Route path="/admin_login" element={<Admin_login/>}/>
            <Route path="/admin_home" element={<Admin_home/>}/>
            <Route path="/admin_medlemmar" element={<Admin_medlemmar/>}/>
            <Route path="/admin_hantera" element={<Admin_hantera/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
