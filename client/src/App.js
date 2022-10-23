import Home from "./components/hem/hem"
import Nav from "./components/nav/nav"
import Om_oss from "./components/om-oss/om-oss"
import Event from "./components/event/event"
import Hall_of_fame from "./components/hall-of-fame/hall-of-fame"
import Footer from "./components/footer/footer"
import {Router, Routes, Route , BrowserRouter} from 'react-router-dom'
import Medlem from "./components/medlem/medlem"
import Admin_login from "./components/admin/admin_login/admin_login"
import Admin_home from "./components/admin/admin_home/admin_home"
import Admin_medlemmar from "./components/admin/admin_medlemmar/admin_medlemmar"
import Admin_hantera from "./components/admin/admin_hantera/admin_hantera"
import './App.css'
import './components/nav/nav.css'
import './components/hem/hem.css'
import './components/om-oss/om-oss.css'
import './components/medlem/medlem.css'
import './components/event/event.css'
import './components/hall-of-fame/hall-of-fame.css'
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
            <Route path="/om-oss" element={<Om_oss/>}/>
            <Route path="/medlem" element={<Medlem/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/hall-of-fame" element={<Hall_of_fame/>}/>
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
