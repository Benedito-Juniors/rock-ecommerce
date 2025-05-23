import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Product = ({ id, image, name, rate, price }) => {
    return (
        <div className='product'>
            <img src={image} alt={name} />
            <p className='name'>{name}</p>
            <p className='rate'>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p className='price'>R${price}</p>
            

            <div className='buttons'>
                <a href='/products/123/checkout' className='btn-icon'>
                    <span>Comprar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                </a>
                <button className='btn-icon add-to-cart-btn'>
                    <span>Adicionar ao carrinho</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    )

    }
export default Product
