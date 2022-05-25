import React, { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tools.filter(item => item._id !== id)
                    setTools(remaining);
                })
        }

    }
    return (
        <div>
            <h2 className='text-3xl text-center mb-3 mt-5'>Manage Tools</h2>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Tools Name</th>
                        <th>Minimum Order Quantity</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((tool, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{tool.name}</td>
                            <td>{tool.min_order_quantity}</td>
                            <td>{tool.available_quantity}</td>
                            <td>${tool.price}</td>
                            <td>
                                <button onClick={() => handleDelete(tool._id)}><BsFillTrashFill /></button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;