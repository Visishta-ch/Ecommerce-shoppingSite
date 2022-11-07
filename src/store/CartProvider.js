import React, { useState, useEffect, useContext } from 'react';
import Cartcontext from './Cartcontext';
import axios from 'axios';
import AuthContext from './AuthContext';

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const userMailId = localStorage.getItem('usermail');
  let um;
  if (userMailId != null) {
    const regex = /[`@.`]/g;
    um = userMailId.replace(regex, '');

  
  }
  useEffect(() => {
    
    const cartListItem = [];
    authCtx.isLoggedIn &&
      axios
        .get(
        `https://crudcrud.com/api/82f7ed3f10854ca98458562b33c08392/cart${um}`
        )
        .then((response) => {
          console.log('rendered in cart provider when refreshed',response.data);
          // const cartListItem = [];
          for (let i = 0; i < response.data.length; i++) {
            let item = response.data[i];
            cartListItem.push(item);
            setItems(cartListItem)
          }
          setItems(cartListItem)
        })
        .catch((err) => {
          console.error(err);
        });
  }, [um]);

  

  async function addItemToCart(item) {
     
  
    const exisitingCartItems = [...items];
    const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    console.log(itemIndex);
    //if item is already present---> updating quantity using put request
    if(itemIndex !== -1) {

      const cartItem = {
        price:exisitingCartItems[itemIndex].price,
        title:exisitingCartItems[itemIndex].title,
        quantity: Number(exisitingCartItems[itemIndex].quantity)+1,
        imageUrl:exisitingCartItems[itemIndex].imageUrl,
      }
      axios.put(`https://crudcrud.com/api/82f7ed3f10854ca98458562b33c08392/cart${um}/${exisitingCartItems[itemIndex]._id}`, 
        cartItem
      ).then(()=>{
        let updatedItemQuantity = [...items];
        updatedItemQuantity[itemIndex].quantity = cartItem.quantity;
        setItems(updatedItemQuantity)
      })
      console.log('item added', exisitingCartItems[itemIndex].quantity)
    
      setItems(exisitingCartItems);
    } else if(itemIndex === -1){
      const response = await axios.post(
        `https://crudcrud.com/api/82f7ed3f10854ca98458562b33c08392/cart${um}`,
        item
      );
      if (response.status === 201) {
        console.log('added item to cart', response.data)       
          let data = response.data;
          setItems([...exisitingCartItems, data]);
         
      } else {
        console.log('error in data saving');
      }
    }
  }

  const removeItemFromCart = (item) => {
    // setItems(items.filter(c => c.id !== item.id)); //to remove item from cart
    console.log('remove item from cart',item._id)

    const exisitingCartItems = [...items];
    let itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    console.log('item index: ' + itemIndex);
    if (exisitingCartItems[itemIndex].quantity > 1) {
    
      const cartItem = {
        price:exisitingCartItems[itemIndex].price,
        title:exisitingCartItems[itemIndex].title,
        quantity: Number(exisitingCartItems[itemIndex].quantity)-1,
        imageUrl:exisitingCartItems[itemIndex].imageUrl,
      }
      axios.put(`https://crudcrud.com/api/82f7ed3f10854ca98458562b33c08392/cart${um}/${exisitingCartItems[itemIndex]._id}`, 
        cartItem
      ).then(()=>{
        let updatedItemQuantity = [...items];
        updatedItemQuantity[itemIndex].quantity = cartItem.quantity;
        setItems(updatedItemQuantity)
      })
    }else if(exisitingCartItems[itemIndex].quantity === 1){
      axios
      .delete(
        `https://crudcrud.com/api/82f7ed3f10854ca98458562b33c08392/cart${um}/${item._id}`
      )
      .then((response) => {
                
         if (exisitingCartItems[itemIndex].quantity === 1) {
          
           setItems(exisitingCartItems.filter((c) => c.id !== item.id));
        
        }

    }).catch((error) => console.log(error));
    
  };
}

  const setItemHandler =(item)=>{
      setItems(item);
  }
 

  const cartListItems = {
    items: items,
    addItems: addItemToCart,
    removeItems: removeItemFromCart,
    setItem: setItemHandler,
  };

  return (
    <Cartcontext.Provider value={cartListItems}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
