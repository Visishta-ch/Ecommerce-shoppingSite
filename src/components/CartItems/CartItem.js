import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import './CartItem.css';
import './Cart.css';
import Cartcontext from '../../store/Cartcontext';


const CartItem = (props) => {
  

  const cartCtx = useContext(Cartcontext);

  let amount = 0;
  cartCtx.items.forEach((item) => {
    amount += Number(item.price * item.quantity);
  });

  const removeCartItem = (item) => {
    console.log('removeCartItem', item);
    cartCtx.removeItems(item);
  };

  const cartListItem = (
    <ul className="listrow">
      {cartCtx.items.map((item) => (
        <li className="list-row" key={item.id} id="listid">
          <img
            src={item.imageUrl}
            alt="img"
            style={{ width: '80px', height: '80px', borderRadius: '5px' }}
          />
          <h4 style={{ alignSelf: 'center' }}>{item.title}</h4>
          <span className="list-price">${item.price}</span>
          <span className="list-amount">
            <input
              type="text"
              value={item.quantity}
              placeholder={item.quantity}
              style={{ width: '20px', height: '20px', textAlign: 'center' }}
            />
          </span>

          <button
            className="rmv-btn"
            id="rmv"
            onClick={() => removeCartItem(item)}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <button style={{ float: 'right' }} onClick={props.onClick}>
        X
      </button>

      <h1 style={{ textAlign: 'center' }}>Cart List</h1>
      <span className="title">title</span>
      <span className="price">Price</span>
      <span className="quantity">Quantity</span>
      {cartListItem}
      {/* {console.log(cartListItem)} */}
      <div className="total">
        Total <span>{amount}</span>{' '}
      </div>
      <div>
        <button className="btn-order">Purchase</button>
      </div>
    </Modal>
  );
};

export default CartItem;


