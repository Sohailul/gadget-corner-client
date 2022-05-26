import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { BsCartCheckFill } from 'react-icons/bs';
import { AiOutlineShop, AiFillShopping } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdReviews } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-500'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mr-5">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-primary text-white rounded">
                        {/* <!-- Sidebar content here --> */}


                        {!admin &&
                            <>
                                <li><Link to="/dashboard/myorders"><AiFillShopping />My Orders</Link></li>
                                <li><Link to="/dashboard/review"><MdReviews />Add a Review</Link></li>
                            </>
                        }
                        <li><Link to="/dashboard"><CgProfile />My Profile</Link></li>
                        {
                            admin &&

                            <>
                                <li><Link to="/dashboard/users"><FaUsers />Users</Link></li>
                                <li><Link to="/dashboard/manageorders"><BsCartCheckFill />Manage All Orders</Link></li>
                                <li><Link to="/dashboard/addproduct"><AiOutlineShop />Add a Product</Link></li>
                                <li><Link to="/dashboard/manageproducts"><MdOutlineManageAccounts />Manage Products</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;