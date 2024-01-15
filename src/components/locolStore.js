import React from 'react'

function LocalCart() {
    const cart = localStorage.getItem('cart')    
    if(cart){
        return JSON.parse(cart)
    }else{
        return []
    }
}
export default LocalCart


export const addToLocal = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}