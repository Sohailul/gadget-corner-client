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
import RequireAuth from './pages/Login/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Users from './pages/Dashboard/Users';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageOrders from './pages/Dashboard/ManageOrders';


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
          <Route path='purchase/:id' element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }></Route>
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="review" element={<AddReview></AddReview>}></Route>
            <Route path="profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="manageorders" element={<ManageOrders></ManageOrders>}></Route>
            <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
          </Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
