// Basket.js
import React from 'react';
import './basket.css'

const Basket = ({ cart, removeFromCart }) => {
    return (
        <div className="basket">

            <ul>
                {cart.map((product,ind) => (
                    <div key={ind} className="basket-item">

                        <img src={product.imageUrl} alt='image' className='img' />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <h4>{product.rating}</h4>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button onClick={() => removeFromCart(product._id)} className='delete-button'>Remove</button>
                        </div>

                    </div>

                ))}
            </ul>
        </div>
    );
};

export default Basket;
