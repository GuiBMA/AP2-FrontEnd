import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewsFeed from './feedNoticia';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<NewsFeed/>}/>
        {/* <Route path='/outra' element={<App/>}/> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
