import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://afternoon-journey-91609.herokuapp.com/profile?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setProfile(data)
                });
        }
    }, [user])

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const education = event.target.education.value;
        const linkedin = event.target.linkedin.value;

        const profile = { name, email, address, education, linkedin };

        const url = `https://afternoon-journey-91609.herokuapp.com/profile`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            });
        toast("Profile Updated Successfully");
        event.target.reset();
    }
    return (
        <div>
            <div className='hero-content text-center'>
                <label htmlFor="update-modal" className="btn modal-button">Update Profile</label>
                <input type="checkbox" id="update-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Update Profile</h3>
                        <div className="card-body">
                            <form onSubmit={handleUpdateProfile}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input disabled type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input disabled type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input type="text" name='education' placeholder="Education" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">LinkedIn</span>
                                    </label>
                                    <input type="text" name='linkedin' placeholder="Your LinkedIn Profile Link" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-full max-w-fit bg-base-100 shadow-xl m-auto mt-5">
                <div className="card-body font-bold">
                    <h2 className="text-2xl">Name: {user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    {
                        profile.map(p =>
                            <>
                                <p>Address: {p.address}</p>
                                <p>Education: {p.education}</p>
                                <p>LinkedIn Profile: {p.linkedin}</p>
                            </>)
                    }
                </div>
            </div>
        </div >
    );
};

export default MyProfile;