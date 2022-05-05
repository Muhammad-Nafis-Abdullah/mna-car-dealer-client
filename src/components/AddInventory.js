import React from 'react';

const AddInventory = () => {


    const submit = (e)=> {
        e.preventDefault();
    }

    return (
        <div className='flex flex-col gap-3 items-center justify-center py-5'>
            <form onSubmit={submit} className='ring-4 ring-offset-4 max-w-sm rounded-sm flex flex-col justify-center p-2 w-full gap-3'>
                <h3 className='text-center underline-offset-2 underline mb-4'>Add Inventory Form</h3>
                <input type="text" className='input-field' placeholder='Items Name'/>
                <input type="text" className='input-field' placeholder='image url'/>
                <textarea type="text" className='text-field' placeholder='Description'/>
                <div className='flex justify-center gap-2 items-center num-field'>
                    <input type="number" className='input-field min-w-0' placeholder='$ Price'/>
                    <input type="number" className='input-field min-w-0' placeholder='Quantity'/>
                </div>
                <input type="text" className='input-field' placeholder='Suppliers Name'/>
                <input type="submit" value="Add Inventory" className='btn btn-dark'/>
            </form>
        </div>
    );
};

export default AddInventory;