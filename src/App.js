import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer';
import Purchase from './pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <div className="App max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='blogs' element={<Blogs />}></Route>
          <Route path='portfolio' element={<Portfolio />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Register />}></Route>
          <Route path='purchase/:id' element={<Purchase />}></Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
