import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import  Header  from './components/Header'
import HomePage from './components/home/HomePage'
import Footer from './components/Footer'
import Login from './components/logIn/Login'
import SignUp from './components/signUp/SignUp'
import Profile from './components/profile/Profile';
import SeriesPage from './components/Series/SeriesPage';
import FilmPage from './components/Film/FilmPage';
import DaftarSaya from './components/daftarSaya/DaftarSaya';
import { useState } from 'react';




function App() {


  const location = useLocation(); 

  const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
        {!isAuthPage && <Header />}
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/series" element= {<SeriesPage/>}/>
          <Route path="/film" element= {<FilmPage/>}/>
          <Route path='/daftarsaya' element={<DaftarSaya/>}/>
        </Routes>

        {!isAuthPage && <Footer />}
    </>
  );
}


export default App;
