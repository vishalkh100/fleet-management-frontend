import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Registration } from './RegistrationComponents/Registration';
import { CompanyInfo } from './CompanyInfo';
import Login from './LoginComponent/Login';
import MakeResevation  from './Booking/MakeResevation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="RegistrationComponents/Registration" element={<Registration />}/>
        <Route path="CompanyInfo" element={<CompanyInfo/>}/>
        <Route path="LoginComponent/Login" element={<Login/>}/>
        <Route path="LoginComponent/Login" element={<Login/>}/>
        <Route path ="Booking/MakeResevation" element={<MakeResevation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
