import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({item}) => {
    const {_id,name,img,details,price,quantity,supplier} = item;
    const navigate = useNavigate();

    return (
        <div className='item-card  border-[4px]'>
            <img src={img} alt="" />
            <h4>{name} <h6 className='text-center text-gray-900/80'>Supplier: {supplier}</h6></h4>
            <p>{details}</p>
            <h5><span>Price: {price}</span><span>Quantity: {quantity}</span></h5>
            <button className='btn btn-outline-dark' onClick={() => navigate(`/inventory/${_id}`)}>Update</button>
        </div>
    );
};

export default ItemsCard;