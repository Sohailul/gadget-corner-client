import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-500'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}


                        { !admin &&
                            <>
                                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                                <li><Link to="/dashboard/review">Add a Review</Link></li>
                            </>
                        }
                        <li><Link to="/dashboard">My Profile</Link></li>
                        {
                            admin &&

                            <>
                                <li><Link to="/dashboard/users">Users</Link></li>
                                <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                                <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                                <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;