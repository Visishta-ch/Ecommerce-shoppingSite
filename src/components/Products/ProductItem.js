import React, { useContext,} from 'react';

import './ProductItem.css';
import Cartcontext from '../../store/Cartcontext';

import { Link} from 'react-router-dom';

const ProductItem = (props) => {
  // console.log(props.item)
  const id = props.item.id;
  // const [buttonClick, setbuttonClick] = useState(false)
 
  const cartCtx = useContext(Cartcontext);
  // console.log(cartCtx.items);
  
 
    const addItemToCart =(e)=> {
    e.preventDefault();
    cartCtx.addItems({ ...props.item });
    // setbuttonClick(true);
  
}

  return (
    <div className="product">
      <h4 style={{ marginTop: '3px' }}>{props.title}</h4>
      <Link
        to={{
          pathname: `/Store/ProductDetail/${id}`,
          state: {
            price: props.price,
            title: props.title,
            image: props.image,
            id: props.id,
          },
        }}
       
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <img src={props.image} alt="" className="product-img" />

        <div className="product-list-amount">
          <span>${props.price}</span>
          <button className="add-btn" onClick={addItemToCart}>
            Add To Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
