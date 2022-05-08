import React from 'react';
import useFetch from '../hooks/useFetch';

const MyItems = () => {
    const items = useFetch('inventory.json');

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
                    items.map((item,index)=> {
                        return (<div key={item._id} className='grid grid-cols-6 border py-1 place-content-center place-items-center'>
                                    <h6>{index+1}</h6>
                                    <div className='col-span-3 flex items-end gap-3'>
                                        <h5>{item.name}</h5>
                                        <h6 className='text-xs text-gray-600'>({item.supplier})</h6>
                                    </div>
                                    <h6>{item.quantity}</h6>
                                    <button className='bg-red-500 text-white px-2 py-1 rounded-full text-xs active:scale-95 duration-200 active:ring-4 ring-red-500 ring-offset-2'>Delete</button>
                                </div>);
                    })
                }
            </section>
        </div>
        </div>
    );
};

export default MyItems;