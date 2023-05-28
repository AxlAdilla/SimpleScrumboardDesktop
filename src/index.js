import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import './index.css';
import App from './Pages/App';
import Create from './Pages/Create';
import reportWebVitals from './reportWebVitals';
import './global';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Auth from './Pages/Auth';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/' element={<App />} />
        <Route path='/create/:id' element={<Create />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
