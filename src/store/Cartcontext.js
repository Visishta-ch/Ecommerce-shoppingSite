import React  from 'react'

const Cartcontext = React.createContext({
    items: [],
    totalAmount: 0 ,
    addItems : (item) => {

    },
    removeItems : (id) => {

    },

    setItem:(item)=>{

    },
})

export default Cartcontext