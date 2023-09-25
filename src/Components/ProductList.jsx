import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import products from '../Product_Api/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductList() {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="col-4 my-3" key={product.id}>
                                    <Card>
                                        <Card.Img variant="top" src={product.img} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Title>{product.price}</Card.Title>
                                            <Card.Text>
                                                {product.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductList;
