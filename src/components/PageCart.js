import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {adjustQty,removeFromCart} from '../redux/actions/productsActions'
import TotalAmount from './TotalAmount'

function PageCart() {
    const cartProducts = useSelector((state)=>state)
    const dispatch = useDispatch()

    const [total,setTotal] = useState(0)
    let sum=0

    const addTot = (t) => {
        setTotal(total+t)
    }
    return (
        <div className="mt-5">
            {   
                cartProducts.allProducts.cart.map(pd => {
                    return(
                        <div class="card mt-3 " key={pd.id}>
                            <div class="card-header">
                                {pd.name}
                            </div>
                            <div class="card-body row">
                                <div className="col">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className='col'>
                                    <input min={1} type="number" value={pd.qty} onChange={(e)=>dispatch(adjustQty(pd.id,parseInt(e.target.value)))}/>
                                    <h4>{pd.qty}x $ {pd.price} : <b> $ {pd.qty*pd.price} </b></h4>
                                    <li class="btn btn-danger" onClick={()=>dispatch(removeFromCart(pd.id))}>Remove</li>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
            <div className='mt-5 ms-4'>
                <TotalAmount/>
            </div>
        </div>
    )
}

export default PageCart
