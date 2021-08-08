import React from 'react'
import './collectionItem.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addItems} from '../../redux/cart/cart-actions'

export default function CollectionItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage:`url(${props.imageUrl})`}}>
           
            </div>
            <div className="collection-footer">
             <span className="name">{props.name}</span>
             <span className="price">{props.price}</span>
             
            </div>
            <Button className="darkBtn" variant="dark" onClick={()=>dispatch(addItems(props.item))}>Add to Cart</Button>
        </div>
    )
}
