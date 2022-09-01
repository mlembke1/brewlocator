import './App.css';
import { Routes, Route } from "react-router-dom";
import All from './pages/All/All';
import Cities from './pages/Cities/Cities';
import Types from './pages/Types/Types';
import Header from './components/Header/Header';
import Postals from './pages/Postals/postals';



function App() {
    return (
      <div className="app-wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="by-type" element={<Types />} />
          <Route path="by-postal" element={<Postals />} />
          <Route path="by-city" element={<Cities />} />
        </Routes>
      </div>
    );
}

export default App;