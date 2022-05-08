import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddInventory = () => {
    const addForm = useRef();

    const submit = (e)=> {
        e.preventDefault();

        const name = addForm.current.name.value;
        const img = addForm.current.url.value;
        const details = addForm.current.details.value;
        const price = "$"+addForm.current.price.value;
        const quantity = addForm.current.quantity.value;
        const supplier = addForm.current.supplier.value;
        console.log(name,img,details,price,quantity,supplier);

        const data = {
            name,
            img,
            details,
            price,
            quantity,
            supplier
        };

        const url = `https://arcane-shore-09021.herokuapp.com/inventory`;
        axios.post(url, data).then((res) => {
            console.log(res);
            toast.success("New Item Added");
            addForm.current.name.value = '';
            addForm.current.url.value = '';
            addForm.current.details.value = '';
            addForm.current.price.value = '';
            addForm.current.quantity.value = '';
            addForm.current.supplier.value = '';
        });
    }

    return (
        <div className='flex flex-col gap-3 items-center justify-center py-5 fadeIn'>
            <form ref={addForm} onSubmit={submit} className='ring-4 ring-offset-4 max-w-sm rounded-sm flex flex-col justify-center p-2 w-full gap-3'>
                <h3 className='text-center underline-offset-2 underline mb-4'>Add Inventory Form</h3>
                <input type="text" className='input-field' placeholder='Items Name' name='name'/>
                <input type="text" className='input-field' placeholder='image url' name='url'/>
                <textarea type="text" className='text-field' placeholder='Description' name='details'/>
                <div className='flex justify-center gap-2 items-center num-field'>
                    <input type="number" className='input-field min-w-0' placeholder='$ Price' name='price'/>
                    <input type="number" className='input-field min-w-0' placeholder='Quantity' name='quantity'/>
                </div>
                <input type="text" className='input-field' placeholder='Suppliers Name' name='supplier'/>
                <input type="submit" value="Add Inventory" className='btn btn-dark'/>
            </form>
        </div>
    );
};

export default AddInventory;