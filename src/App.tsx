import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Applayout from './components/layout/Applayout';
import Login from './pages/login';
import Report from './pages/report';
import Trade from './pages/trade';
import Analysis from './pages/analysis';
import { Amplify } from 'aws-amplify'; // デフォルトではなく名前付きインポートにする
import awsconfig from './aws-exports';

// AWS Amplifyの設定を読み込む
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Applayout />}>
          <Route path='/' element={<Login
          isPassedToWithAuthenticator
          />}/>
          <Route path='/report'element={<Report />}/>
          <Route path='/trade'element={<Trade />}/>
          <Route path='/analysis'element={<Analysis />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
