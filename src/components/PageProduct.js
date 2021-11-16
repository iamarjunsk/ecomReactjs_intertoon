import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { removeSelectedProduct } from '../redux/actions/productsActions';


function PageProduct() {
    const pid = useParams()
    let product = {}
    function pdt(prod){
        if(prod.id == pid.pid){
            product =prod
        }
    }

    const products = useSelector((state) => state)
    products.allProducts.products.forEach(pdt);
    console.log(product);
    return (
        <div className="container">
            <div className="row product-det">
                <div className="col">
                    <img src={product.image} />
                </div>
                <div className="col">
                    <h3 className="fw-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <p className={product.is_veg==='2'?"text-danger":"text-success"}>{product.is_veg==='2'?"Non-Vegeterian":"Vegeterian"}</p>
                    <div>
                        <h3>Available from:</h3>
                        <p>{product.available_from} - {product.available_to} </p>
                    </div>
                    {
                        
                    }

                    <div className='mt-4'>
                        <b>$ {product.price}</b>
                        <div>
                            <button className="btn btn-primary mt-2">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PageProduct
