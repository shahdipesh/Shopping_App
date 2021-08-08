import React from 'react'
import './menu-item.scss';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

 function menuItem(props) {
    return (
            <div style={{backgroundImage:`url(${props.imageUrl})`,backgroundSize:"100%"} }
            className="menu-item">
           <div className="content" onClick={()=>props.history.push(props.linkUrl)}>
          <Link className="title">{props.title}</Link>
         <Link className="subtitle">Shop</Link>
      </div>
      </div>
    
    )
}
export default withRouter(menuItem);
