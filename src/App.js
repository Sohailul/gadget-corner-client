import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
