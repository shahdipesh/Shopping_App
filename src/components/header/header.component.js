import React from 'react'
import './header.component.scss';
import { ReactComponent as ReactLogo } from '../../assets/images/crown.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/user/user.actions'
import { Cart2 } from 'react-bootstrap-icons';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import changeVisibility from '../../redux/cart/cart-actions';
function Header(props) {

    var currentUser = useSelector((state) => state.user.currentUser)
    var cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    var numItems = cartItems.reduce((acc, cartItem) => {
        return acc+cartItem.quantity;
        },0);

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <Link to="/" className="a"><ReactLogo /></Link>
                </div>
                <div className="links">
                    <Link to="/shop" className="a">Shop</Link>
                    <Link to="/contact" className="a">Contact</Link>

                    {currentUser ?
                    <div style={{display: 'inline-block'}}>
                        <Link className="a" onClick={() => dispatch(logout())}>Sign Out</Link>
                        <Cart2 size={30} onClick={()=>dispatch(changeVisibility())} ></Cart2>
                        <span className="numItems">{numItems}</span>
                      </div>
                        :
                        <Link to="/login" className="a">Sign In</Link>
                    }
                   
                    
                    {props.visible?<CartDropdown ></CartDropdown>:null}

                </div>

            </div>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        visible: state.cart.visible,
        numItems:state.cart.items.length
    }
}


export default connect(mapStateToProps)(Header);