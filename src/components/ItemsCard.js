import React from 'react';

const ItemsCard = ({item}) => {
    const {name,img,details,price,quantity,supplier} = item;


    return (
        <div className='item-card box glowing'>
            <img src={img} alt="" />
            <h4>{name} <h6 className='text-center text-gray-900/80'>Supplier: {supplier}</h6></h4>
            <p>{details}</p>
            <h5><span>Price: {price}</span><span>Quantity: {quantity}</span></h5>
            <button className='btn btn-outline-dark'>Update</button>
        </div>
    );
};

export default ItemsCard;