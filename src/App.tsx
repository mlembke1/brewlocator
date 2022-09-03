import './App.css';
import { Routes, Route } from "react-router-dom";
import All from './pages/All/All';
import Cities from './pages/Cities/Cities';
import Types from './pages/Types/Types';
import Header from './components/Header/Header';
import Postals from './pages/Postals/postals';
import Brewery from './components/Brewery/Brewery';



function App() {
    return (
      <div className="app-wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<All/>} />
          <Route path="by-type" element={<Types/>} />
          <Route path="by-postal" element={<Postals/>} />
          <Route path="by-city" element={<Cities/>} />
          <Route path="brewery/:breweryid" element={<Brewery/>} ></Route>
        </Routes>
      </div>
    );
}

export default App;