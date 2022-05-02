import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();


    return (
        <div className='flex flex-col gap-3 items-center justify-center py-5'>
            {
                id && 
                <div className='item-card border-[4px] min-w-[20rem]'>
                    <img src={''} alt="" />
                    <h4>{''} <h6 className='text-center text-gray-900/80'>Supplier: {''}</h6></h4>
                    <p>{''}</p>
                    <h5><span>Price: {''}</span><span>Quantity: {''}</span></h5>
                    <button className='btn btn-success'>Delivered</button>
                </div>
            }
        </div>
    );
};

export default Inventory;