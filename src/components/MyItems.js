import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `https://arcane-shore-09021.herokuapp.com/myItems?email=${email}`;
            await axios
                .get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })
                .then((data) => setMyItems(data.data));
            console.log(myItems);
        };
        getMyItems();
    }, [user]);

    // Deleting Item from My Item
    const handleDelete = (id) => {
        const url = `https://arcane-shore-09021.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const rest = myItems.filter((p) => p._id !== id);
                setMyItems(rest);
            });
    };


    return (
        <div className='fadeIn'>
            <div className='container flex flex-col justify-center gap-3 py-4'>
            <section className='space-y-1'>
                <h2 className='text-center underline underline-offset-2 mb-6'>All Inventories</h2>
                <div className='grid grid-cols-6 justify-items-center underline underline-offset-2 decoration-[3px]'>
                    <h6>Serial</h6>
                    <h6 className='col-span-3'>Name and Suppliers</h6>
                    <h6>Quantity</h6>
                </div>
                {
                    myItems.map((item,index)=> {
                        return (<div key={item._id} className='grid grid-cols-6 border py-1 place-content-center place-items-center'>
                                    <h6>{index+1}</h6>
                                    <div className='col-span-3 flex items-end gap-3'>
                                        <h5>{item.name}</h5>
                                        <h6 className='text-xs text-gray-600'>({item.supplier})</h6>
                                    </div>
                                    <h6>{item.quantity}</h6>
                                    <button className='bg-red-500 text-white px-2 py-1 rounded-full text-xs active:scale-95 duration-200 active:ring-4 ring-red-500 ring-offset-2' onClick={()=> handleDelete(item._id)}>Delete</button>
                                </div>);
                    })
                }
            </section>
        </div>
        </div>
    );
};

export default MyItems;