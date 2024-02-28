import Home from "./components/homepage/homepage"
import About from "./components/about/about"
import Events from "./components/events/events"
import Footer from "./components/footer/footer"
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import Courses from "./components/courses/courses"
import './App.css'
import './components/nav/nav.css'
import './components/homepage/homepage.css'
import './components/about/about.css'
import './components/courses/courses.css'
import './components/events/events.css'
import './components/footer/footer.css'



function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
