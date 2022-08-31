import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import All from './pages/All/All';



class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    
  }

  render(): React.ReactNode {
    return (
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<All />} />
        </Routes>
      </div>
    );
  }
}

export default App;
