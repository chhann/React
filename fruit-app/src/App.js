import './App.css';

import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';


import Header from './components/Header';
import Main from './page/Main';
import Layout from './page/Layout';
import Story from './page/Story';

import { DataProvider } from './components/DataContext';
import { Fruu } from './page/Fruu';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/Stroy' element={<Story/>}/>
            <Route path='/Stroy/:id' element={<Fruu/>}/>
            
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
