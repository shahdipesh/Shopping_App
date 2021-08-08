import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './cart-item.scss';
const CartItem = ({imageUrl,name,price,quantity}) => {
 return (
   <div className="cart-item">
      <img src = {imageUrl}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} X ${price}</span>
      </div>
   </div>
 )
}

export default CartItem;