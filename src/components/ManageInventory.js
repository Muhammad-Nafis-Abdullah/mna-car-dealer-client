import React from 'react';
import useFetch from '../hooks/useFetch';


const ManageInventory = () => {
    const items = useFetch('inventory.json')


    return (
        <div className='container'>
            <section className='space-y-1 mt-4'>
                <div className='grid grid-cols-6 justify-items-center underline underline-offset-2 decoration-[3px]'>
                    <h6>Serial</h6>
                    <h6 className='col-span-3'>Name and Suppliers</h6>
                    <h6>Quantity</h6>
                </div>
                {
                    items.map((item,index)=> {
                        return (<div className='grid grid-cols-6 justify-items-center border'>
                                    <h6>{index+1}</h6>
                                    <div className='col-span-3 flex items-end gap-3'>
                                        <h5>{item.name}</h5>
                                        <h6 className='text-xs text-gray-600'>({item.supplier})</h6>
                                    </div>
                                    <h6>{item.quantity}</h6>
                                    <button className='bg-red-500 text-white px-2 rounded-full text-xs active:scale-95 duration-200 active:ring-4 ring-red-500 ring-offset-2'>Delete</button>
                                </div>);
                    })
                }
            </section>
        </div>
    );
};

export default ManageInventory;