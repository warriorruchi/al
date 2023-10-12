
import React, { useState, useEffect } from 'react';
import './fetchdata.css'

function FetchData({ addToCart }) {

    const [products, setProducts] = useState([]);


    const fetchProductData = () => {
        return fetch(`http://3.7.252.58:4001/product/getAllProduct`, {
            method: 'POST',
            body: JSON.stringify({
                "id": 1,
                "name": "Product 1",
                "price": 10.99
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) =>
                setProducts(json)
            );

    }
    // console.log(products);
    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <>

            <div className="product-list">
                {/* <h1>Product List</h1> */}
                {products.map((product) => (
                    <div key={product.id} className='product'>
                        <div><img src={product.imageUrl} alt='image' className='img' /></div>
                        <div> <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <h4>{product.rating}</h4>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button onClick={() => addToCart(product)} className='addTocard'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )

}

export default FetchData;