import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/homepage';
import Form from './pages/form';
import Student from './pages/student';
import StudentDetail from './pages/student_Info';


export default function Route_pr(){
  return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />}>
<Route path="/Form" element={<Form/>}/>
<Route path="/Student" element={<Student/>}/>
<Route path="/s" element={<StudentDetail/>}>
  <Route path=":id" element={<StudentDetail/>}/>
  </Route>


</Route>
</Routes>
</BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route_pr />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
