import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './components/home';
import Movie from './components/movie';
import NotFound from './components/notFound';


import { GlobalStyle } from './GlobalStyle';
import './App.css';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={  <Home /> } />
        <Route path='/:movieId' element={ <Movie /> } />
        <Route path='/*' element={ <NotFound/>} />
      </Routes>
      
      <GlobalStyle />
    </Router>
);


export default App;
