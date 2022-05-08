import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from '../hooks/useFetch';

const Inventory = () => {
    const quantityForm = useRef();
    const {id} = useParams();
    const item = useFetch(`https://arcane-shore-09021.herokuapp.com/inventory/${id}`,{});
    const {name,img,details,price,supplier} = item;
    let {quantity} = item;
    const navigate = useNavigate();

    const submit = (e)=> {
        e.preventDefault();
        const newQuantity = quantityForm.current.quantityField.value;
        quantity += parseInt(newQuantity);
        const newInventoryQuantity = { quantity };
        const url = `https://arcane-shore-09021.herokuapp.com/inventory/${id}`;
        axios.put(url, newInventoryQuantity).then((res) => {
            console.log(res);
            toast.success("Quantity Updated");
        });
        window.location.reload();
    }

    const deliverd = ()=> {
        quantity -= 1;
        const newInventoryQuantity = { quantity };
        const url = `https://arcane-shore-09021.herokuapp.com/inventory/${id}`;
        axios.put(url, newInventoryQuantity).then((res) => {
            console.log(res);
            toast.success("Quantity Updated");
        });
        window.location.reload();
    };


    return (
        <div className='flex flex-col gap-3 items-center justify-center py-5 fadeIn'>
            <div className='item-card border-[4px] w-full max-w-sm'>
                <img src={img} alt="" />
                <h4>{name} <h6 className='text-center text-gray-900/80'>Supplier: {supplier}</h6></h4>
                <p>{details}</p>
                <h5><span>Price: {price}</span><span>Quantity: {quantity}</span></h5>
                <button className='btn btn-success' onClick={deliverd}>Delivered</button>
            </div>
            <form ref={quantityForm} onSubmit={submit} className='ring-4 ring-offset-4 max-w-sm rounded-sm flex flex-col justify-center p-2 w-full gap-3'>
                <h3 className='text-center underline-offset-2 underline mb-4'>Add Quantity</h3>
                <span className='input-field' disabled>{name || 'Inventory Name'}</span>
                <span className='input-field overflow-x-auto' disabled>{img || 'Inventory image link'}</span>
                <span className='text-field' disabled>{details || 'Inventory details'}</span>
                <div className='flex justify-center gap-2 items-center num-field'>
                    <span className='input-field min-w-0' disabled>{price || 'Price'}</span>
                    <span className='input-field min-w-0' disabled>{quantity || 'Previous Quantity'}</span>
                    <input type="number" name='quantityField' className='input-field min-w-0' placeholder='Add Quantity'/>
                </div>
                <span className='input-field' disabled>{supplier || 'Supplier Name'}</span>
                <input type="submit" value="Update Quantity" className='btn btn-dark'/>
            </form>


            <button onClick={()=> {
                navigate('/manage-inventory')
            }} className='btn btn-info self-stretch mx-4 mt-5 fw-semi'>Manage Inventory</button>
        </div>
    );
};

export default Inventory;