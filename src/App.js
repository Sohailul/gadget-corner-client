import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='login' element={<Login/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
