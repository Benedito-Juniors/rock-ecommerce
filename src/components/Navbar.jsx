import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {

    const [show,setShow] = useState(false)

    return (
        <Router>
            <div className="nav">
                <div className="inner-content">
                    <h1 className="logo">
                        ROCK<span>STORE</span>
                    </h1>
                    <nav className={`${show &&'show'}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Produto</Link>
                            </li>
                            <li>
                                <Link to="/about">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contato</Link>
                            </li>
                            <li>
                                <Link to="/account">Conta</Link>
                            </li>

                           
                        </ul>
                    </nav>

                    <div className="navs-icon-container">
                        <div className="search-input-container">
                            <input type="search" placeholder="Pesquisar" />
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <button className="shopping-cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <div className="products-count">22</div>
                        </button>
                        <button className="menu-button"onClick={()=>setShow(!show)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Navbar;
