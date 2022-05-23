import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [tools, setTools] = useState({});

    useEffect(()=>{
        fetch('tools.json')
        .then(res=> res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">UserName</span>
                    </label>
                    <input disabled type="text" value="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input disabled type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="number" name="min_order_quantity" placeholder="Minimum Order Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input disabled type="number" name="available_quantity" value="available_quantity" placeholder="Minimum Order Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input disabled type="number" name="price" placeholder="Minimum Order Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" name="address" placeholder="Minimum Order Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="phone" placeholder="Minimum Order Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default Purchase;