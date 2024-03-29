import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './page/login/Login';
import "./main.css"
import ListStudent from './page/listStudent/LIstStudent';
import Evaluate from './page/evaluate/Evaluate';
import Debate from './page/debate/Debate';
import Divide from './page/divide/Divide';
import CreateDidive from './page/divide/CreateDivide';
import CreateEvaluate from './page/evaluate/CreateEvaluate';
import CreateDebate from './page/debate/CreateDebate';
import MainPage from './page/mainPage/MainPage';
import Test from './Test';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Test/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/divide" element={<Divide/>} />
        <Route exact path="/evaluate" element={<Evaluate/>} />
        <Route exact path="/debate" element={<Debate/>} />
        <Route exact path="/createDivide" element={<CreateDidive/>} />
        <Route exact path="/createDebate" element={<CreateDebate/>} />
        <Route exact path="/createEvaluate" element={<CreateEvaluate/>} />
        <Route exact path="/student" element={<ListStudent/>} />
      </Routes>
    </Router>
  )
}

export default App;
