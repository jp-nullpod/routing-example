import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/profile'> Profile </Link>
                <Link to='/about'> About </Link>
                <br /><br />
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile/:username' element={<Profile />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <br /><br />
            <Footer />
        </Router>
    );
}

export default App;
