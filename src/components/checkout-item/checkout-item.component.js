import React from 'react';
import './checkoutItem.scss';
import { useDispatch } from 'react-redux'
import {deleteItem,increaseQuantity,decreaseQuantity} from '../../redux/cart/cart-actions'
const CheckoutItem = (props) => {
   const dispatch = useDispatch();
 return (
   <div className="checkout-item">
       <div className="image-container">
          <img src={props.imageUrl}/>
       </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
         <span className="quantity-button" onClick={()=>dispatch(decreaseQuantity(props.id))}>-</span>
         &nbsp;&nbsp;{props.quantity}&nbsp;&nbsp;
      <span className="quantity-button" onClick={()=>dispatch(increaseQuantity(props.id))}>+</span>
      
      </span>
      <span className="price">{props.price}</span>
      <span className="remove-button" onClick={()=>{dispatch(deleteItem(props.id))}}>X </span>
   </div>
 )
}

export default CheckoutItem;