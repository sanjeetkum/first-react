import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import KDLSider from './components/Sider';
import './App.css';


class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div>
     <KDLSider />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
