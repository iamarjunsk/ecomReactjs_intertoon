import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    
    return (
        <div className="card card-size mt-4 me-5">
            <div className="card-body product-body">
                <img src={props.data.image} class="card-img-top" alt="..."/>
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
                <p className="card-text">$ {props.data.price}</p>
            <Link to ={`/product/${props.data.id}`}>
                <input type="button"  className="btn btn-primary w-100" value="View" />
            </Link>
            </div>
        </div>
    )
}

export default ProductCard