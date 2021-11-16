import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const cartProducts = useSelector((state)=>state)
    const navigate = useNavigate()
    let qty = 0
    cartProducts.allProducts.cart.map(pd => {
        return(
            qty=qty+pd.qty
        )})
    const [search, setSearch] = useState('')
    
    const searchStr = ()=>{
        if(search){
            navigate(`/search/${search}`)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'}>
                    <a className="navbar-brand" href="#">Intertoons</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-con" id="navbarSupportedContent">
                    <div className="d-flex ps-5" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e=>setSearch(e.target.value)}/>
                        <input className="btn btn-outline-success" type="button" onClick={searchStr} value="submit"/>
                    </div>
                    <Link to={'/cart'}>
                        <p className="cart txt-decor"><img src="/cart.png"></img>{qty} </p> 
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
