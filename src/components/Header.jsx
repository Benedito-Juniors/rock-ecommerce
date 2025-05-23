import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='inner-content'>
                <div className='left-side'>
                    <h2>deia um novo estilo ao seu trabalho </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dolores ipsa nisi ea quae debitis quibusdam consequatur laboriosam, iusto reiciendis blanditiis officia ab? Eos, odit exercitationem sit ab quis inventore.
                    </p>

                    <a href='/products' className='see-more-btn'>
                        <span >Ver agora </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>

                <div className='right-side'>
                    <img src="/images/header-image.png" alt='' />
                </div>
            </div>


        </header>
    )
}

export default Header