import React from 'react';
import './checkout.styles.scss'
import { useSelector } from 'react-redux'
import CheckoutItem from '../checkout-item/checkout-item.component';
const Checkout = () => {
    const items = useSelector((state) => state.cart.items);
    var price=0;
    if(items.length>0) {
        price = items.reduce((acc, item) => {return acc + item.price*item.quantity;}, 0);
    }
 return (
   <div className="checkout-page">
       <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
       </div>
       {items.map(item => <CheckoutItem id={item.id} name={item.name} quantity={item.quantity} price={item.price} imageUrl={item.imageUrl}></CheckoutItem>)}
       <div className="total">
           <span>Total$: {price}</span>
       </div>
   </div>
 )
}

export default Checkout;