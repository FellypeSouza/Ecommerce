import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import NikeShoeRoute from './components/Routes/NikeShoeRoute';
import NikeClothRoute from './components/Routes/NikeClothRoute';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, HashRouter, BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="shoe" element={<NikeShoeRoute/>}/>
        <Route path="/" element={<NikeClothRoute/>}/>
      </Routes>
    </HashRouter> */}
    <BrowserRouter>
      <Routes>
        <Route Component={App} path="/" exact/>
        <Route Component={NikeClothRoute} path='/nikecloth' exact/>
        <Route Component={NikeShoeRoute} path='/nikeshoe' exact/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
