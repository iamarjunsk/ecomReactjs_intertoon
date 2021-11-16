import React, { useState } from 'react'

function Header() {
    const [search, setSearch] = useState('')
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Intertoons</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-con" id="navbarSupportedContent">
                    <form className="d-flex ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e=>setSearch(e.target.value)}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a className="cart" href="/cart"><img src="/cart.png"></img> </a>
                </div>
            </div>
        </nav>
    )
}

export default Header
