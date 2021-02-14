import React, { useState } from 'react'

const NavigationBar = () => {

    const [burger, setBurger] = useState(false)

    const handleBurger = () => {
        setBurger(!burger)
        console.log(burger);
    }


    return (
        <>
            <nav className="navbar has-shadow is-primary">
                <div className="navbar-brand">
                    <a className='navbar-item'>
                        <h3>MUGIWARA NO COFFEE</h3>
                    </a>
                    <div className="navbar-burger" onClick={handleBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={burger ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Product
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">Coffee</a>
                                <a className="navbar-item">Machine</a>
                                <a className="navbar-item">Event</a>
                            </div>
                        </div>
                        <a className="navbar-item">Service</a>
                        <a className="navbar-item">About Us</a>
                        <a className="navbar-item">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="section pt-5">
                <nav className="breadcrumb has-succeeds-separator is-small">
                    <ul className='container'>
                        <li><a className='has-text-grey'>Home</a></li>
                        <li><a className='has-text-grey'>Order</a></li>
                        <li><a className='has-text-grey'>Payment</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavigationBar;