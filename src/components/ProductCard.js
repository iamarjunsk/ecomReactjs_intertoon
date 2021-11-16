import React from 'react'

function ProductCard(props) {
    return (
        <div className="card card-size mt-4 me-5">
            {
                console.log(props)
            }
            <div className="card-body">
                <img src={props.data.image} class="card-img-top" alt="..."/>
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
                <p className="card-text">$ {props.data.price}</p>
                <input type="button" href="#" className="btn btn-primary" value="View" />
            </div>
        </div>
    )
}

export default ProductCard