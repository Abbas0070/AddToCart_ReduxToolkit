import React from 'react';
import { addToCart, removeQuantityCart } from "../Store/cartSlice";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/cartSlice';
import { Card, ListGroup } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const Adddispatch = useDispatch();

  const handleAddToCart = (product) => {
    Adddispatch(addToCart(product));
  };

  const dispatchQuan = useDispatch();
  
  const minusQuantity = (product) => {
    dispatchQuan(removeQuantityCart(product));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {cartItems.map((item) => {
              return (
                <>
                  <Card className='my-3'>
                    <ListGroup key={item.id} variant="flush">
                      <ListGroup.Item className='d-flex justify-content-between align-items-center my-3'>
                        <div className='d-flex align-items-center'>
                          <img src={item.img} alt="" width={50} height={50} />
                          <p className='mx-4 h5'>{item.title}</p>
                          <p className='mx-4 h5'>{item.description}</p>
                          <p className='mx-4 h5'>${item.price}</p>
                        </div>
                        <div className="btn btn-primary" onClick={() => handleRemoveFromCart(item)}>-</div>
                        <p className='mx-4 h5'>{item.quantity}</p>
                        <div className="btn btn-primary" onClick={() => handleAddToCart(item)}>+</div>
                        <button className='btn btn-danger' onClick={() => minusQuantity(item)}>Remove from Cart</button></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
