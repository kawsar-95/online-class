import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const total=props.cart;
    const totalPrice=(total.reduce((sum, item) =>sum+item.price,0));
    
    
    return (
       <div className="sticky">
         
           <img className="cart-image" src='https://i.ibb.co/K757TW2/How-can-You-Boost-Your-Career-to-the-Next-Level.png' alt=''></img>
        <div className="card text-white bg-danger mb-3" style={{maxWidth: "100%"}}>
        <div className="card-header">Boost your Career with these Premium Courses</div>
        <div className="card-body">
            
    <h5 className="card-title">Total Course Added: {total.length}</h5>
    <h5 className="card-title">Total Amount: ${totalPrice}</h5>
        </div>
      </div></div>
    );
};

export default Cart;