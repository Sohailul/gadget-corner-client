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
            fetch(`http://localhost:5000/profile?email=${user.email}`, {
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

        const url = `http://localhost:5000/profile`;
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
                <label for="update-modal" class="btn modal-button">Update Profile</label>
                <input type="checkbox" id="update-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Update Profile</h3>
                        <div class="card-body">
                            <form onSubmit={handleUpdateProfile}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user?.displayName} placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' value={user?.email} placeholder="Email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Education</span>
                                    </label>
                                    <input type="text" name='education' placeholder="Education" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">LinkedIn</span>
                                    </label>
                                    <input type="text" name='linkedin' placeholder="Your LinkedIn Profile Link" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card w-full max-w-xs bg-base-100 shadow-xl m-auto mt-5">
                <div class="card-body font-bold">
                    <h2 class="text-2xl">Name: {user?.displayName}</h2>
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