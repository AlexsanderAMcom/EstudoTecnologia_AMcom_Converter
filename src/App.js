import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import React from 'react';
import Header from './components/header/Header';
import Conversor from './views/Conversor';

const App = () => (
  <div>
    <Header />
    <Conversor />
  </div>
);

export default App;
