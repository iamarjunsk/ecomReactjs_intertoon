import React from 'react'
import { useSelector } from 'react-redux'

function TotalAmount() {
    const cartProducts = useSelector((state)=>state)
    let sum = 0
    cartProducts.allProducts.cart.map(pd => {
        return(
            sum=sum+pd.qty*pd.price
        )})
    return (
        <div>
            <h5>Total</h5>
            <h2> $ {sum}</h2>
        </div>
    )
}

export default TotalAmount
