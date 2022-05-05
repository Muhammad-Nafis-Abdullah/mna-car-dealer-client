import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const submit = (e)=> {
        e.preventDefault();
    }

    return (
        <div className='flex flex-col gap-3 items-center justify-center py-5'>
            <div className='item-card border-[4px] min-w-[20rem]'>
                <img src={''} alt="" />
                <h4>{''} <h6 className='text-center text-gray-900/80'>Supplier: {''}</h6></h4>
                <p>{''}</p>
                <h5><span>Price: {''}</span><span>Quantity: {''}</span></h5>
                <button className='btn btn-success'>Delivered</button>
            </div>
            <form onSubmit={submit} className='ring-4 ring-offset-4 max-w-sm rounded-sm flex flex-col justify-center p-2 w-full gap-3'>
                <h3 className='text-center underline-offset-2 underline mb-4'>Add Quantity</h3>
                <input type="text" className='input-field' placeholder='Items Name' value={id} disabled/>
                <input type="text" className='input-field' placeholder='image url' value={id} disabled/>
                <textarea type="text" className='text-field' placeholder='Description' value={id} disabled/>
                <div className='flex justify-center gap-2 items-center num-field'>
                    <input type="number" className='input-field min-w-0' placeholder='$ Price' value={id} disabled/>
                    <input type="number" className='input-field min-w-0' placeholder='Previous Quantity' value={id} disabled/>
                    <input type="number" className='input-field min-w-0' placeholder='Add Quantity' />
                </div>
                <input type="text" className='input-field' placeholder='Suppliers Name' value={id} disabled/>
                <input type="submit" value="Update Quantity" className='btn btn-dark'/>
            </form>


            <button onClick={()=> {
                navigate('/manage-inventory')
            }} className='btn btn-info self-stretch mx-4 mt-5 fw-semi'>Manage Inventory</button>
        </div>
    );
};

export default Inventory;