import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import NikeShoeRoute from './components/Routes/NikeShoeRoute';
import NikeClothRoute from './components/Routes/NikeClothRoute';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="Ecommerce" element={<App/>}/>
        <Route path='/NikeShoe' element={<NikeShoeRoute/>}/>
        <Route path='/NikeCloth' element={<NikeClothRoute/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
