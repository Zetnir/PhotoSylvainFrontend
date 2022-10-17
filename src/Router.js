import React, { Component }  from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Work from './routes/Work';

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about/" element={<About />} />
              <Route path="contact/" element={<Contact />} />
              <Route path="work/" element={<Work />} />
          </Routes>
        </BrowserRouter>
      );
  }
}

export default Router;
