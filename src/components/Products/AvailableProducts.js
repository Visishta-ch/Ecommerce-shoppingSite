import React from 'react'
import ProductItem from './ProductItem'



const productsArr = [

    {   id:'k1',
        title: 'Colors',
        price: 100,
       
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 1,
    },
    
    {   id:'k2',
        title: 'Black and white Colors',
        price: 50,
        quantity: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {   id:'k3',
        title: 'Yellow and Black Colors',
        price: 70,
        quantity: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {   id:'k4',
        title: 'Blue Color',
        price: 100,
        quantity: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    },
  


    
    ]
    
    

const AvailableProducts = (props) => {

   
   

    const prod = productsArr.map((product) => (
        <ProductItem 
            item={product}
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.imageUrl}
            price={product.price}
        />
    ))

   

  return (
    <div className='productCard' style={{position:'relative',top:'7rem'}} id = 'id'>
       <div> {prod}</div> 
       
    </div>
  )
}

export default AvailableProducts