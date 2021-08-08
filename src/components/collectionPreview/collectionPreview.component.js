import React from 'react'
import './collectionPreview.scss';
import CollectionItem from '../collection-item/collection-item.component';
export default function CollectionPreview(props) {
    return (
        <div className="collection-preview"> 
            <h1 className="title">{props.title}</h1>
            {/* 4 items inside a div, use flex to place them side by side */}
            <div className="preview">  
                {props.items.filter((item,index)=>index<4).map(item=>{ 
               return <CollectionItem item={item} imageUrl={item.imageUrl} name={item.name} price={item.price}></CollectionItem>
                })}
            </div>
        </div>
    )
}
