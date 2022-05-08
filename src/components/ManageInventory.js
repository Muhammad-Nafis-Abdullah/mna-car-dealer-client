import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ManageInventory = () => {
    const navigate = useNavigate();

    const [inventories,setInventories] = useState([]);

    useEffect(()=> {
        fetch('https://arcane-shore-09021.herokuapp.com/inventories').then(response => response.json()).then(data => setInventories(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    const deleteInventory = (id)=> {
        const confirmDelete = window.confirm('Are you sure to delete the inventory ?');
        if (confirmDelete) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const rest = inventories.filter((p) => p._id !== id);
                    setInventories(rest);
                    toast.dark(`Inventory Deleted Successfully`);
                });
        } else {
            return;
        }
    }

    return (
        <div className='container flex flex-col justify-center gap-3 py-4 fadeIn'>
            <section className='space-y-1'>
                <h2 className='text-center underline underline-offset-2 mb-6'>All Inventories</h2>
                <div className='grid grid-cols-6 justify-items-center underline underline-offset-2 decoration-[3px]'>
                    <h6>Serial</h6>
                    <h6 className='col-span-3'>Name and Suppliers</h6>
                    <h6>Quantity</h6>
                </div>
                {
                    inventories.map((item,index)=> {
                        return (<div key={item._id} className='grid grid-cols-6 border py-1 place-content-center place-items-center'>
                                    <h6>{index+1}</h6>
                                    <div className='col-span-3 flex items-end gap-3'>
                                        <h5>{item.name}</h5>
                                        <h6 className='text-xs text-gray-600'>({item.supplier})</h6>
                                    </div>
                                    <h6>{item.quantity}</h6>
                                    <button onClick={()=> deleteInventory(item._id)} className='bg-red-500 text-white px-2 py-1 rounded-full text-xs active:scale-95 duration-200 active:ring-4 ring-red-500 ring-offset-2'>Delete</button>
                                </div>);
                    })
                }
            </section>
            <button onClick={()=> {
                navigate('/add-inventory');
            }} className='btn btn-info self-stretch mx-4 mt-5 fw-semi'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;