import React from 'react';
import { Button } from 'react-bootstrap';
import './cart-dropdown.scss'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import changeVisibility from '../../redux/cart/cart-actions';
import { withRouter } from 'react-router';
const CartDropdown = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
 return (
   <div className="cart-dropdown">
       <div className="cart-items">
           {items.length>0?items.map((item) => {
            return <CartItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} ></CartItem>
           }):<span>Please add items...</span>}
    </div>

   <Button variant="dark"  onClick={()=>{props.history.push('/checkout');dispatch(changeVisibility())}}>CheckOut</Button>
   </div>
 )
}

export default withRouter(CartDropdown);