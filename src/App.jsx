import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.jsx';
import { Home } from './Components/Home/Home.jsx';
import { Agents } from './Components/Agents/Agents.jsx';
import { Agent } from './Components/Agent/Agent.jsx';
import { Maps } from './Components/Maps/Maps.jsx';
import { Map } from './Components/Map/Map.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import './App.css';
import './fonts/valorant.ttf';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/agents/:id' element={<Agent />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/maps/:id' element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
