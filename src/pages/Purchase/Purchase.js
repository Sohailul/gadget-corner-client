import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tools, setTools] = useState({});

    useEffect(() => {
        fetch(`https://afternoon-journey-91609.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handlePurchase = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const tools_name = event.target.tools_name.value;
        const min_order_quantity = event.target.min_order_quantity.value;
        const available_quantity = event.target.available_quantity.value;
        const price = event.target.price.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const purchase = { name, email, tools_name, min_order_quantity, available_quantity, price, address, phone };

        if (min_order_quantity >= tools.min_order_quantity && min_order_quantity <= tools.available_quantity) {

            const url = `https://afternoon-journey-91609.herokuapp.com/order`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(purchase),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                });
            toast("Order Submitted Successfully");
            event.target.reset();
        }
        else {
            toast.error(`Something is wrong! Minimum Order quantity ${tools.min_order_quantity}  and Available Quantity in Stock ${tools.available_quantity}`);
        }
    }

    return (
        <div className='flex mt-12 mb-12 justify-center items-center'>
            <div className='card w-1/2 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <form onSubmit={handlePurchase}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input disabled type="text" value={user?.displayName} name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input disabled type="text" value={user?.email} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input disabled type="text" value={tools.name} name="tools_name" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="min_order_quantity" placeholder={`Minimum Order Quantity is ${tools.min_order_quantity}`} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input disabled type="number" name="available_quantity" value={tools.available_quantity} placeholder="Available Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder={`Price is ${tools.price}`} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;