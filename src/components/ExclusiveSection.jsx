import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ExclusiveSection = () => {
  return (
    <div className='exclusive-section'>
      <div className='page-inner-content'>
        <div className='content'>
          <div className='left-side'>
            <h2>Smart Band 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eos dolorem in deleniti pariatur, tempora expedita, odit fugiat vero voluptatibus enim corrupti molestias eum labore consectetur. Explicabo commodi id quas.
            </p>
            <a href='/products' className='see-more-btn'>
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
          <div className='right-side'>
            <img src='/images/exclusive.png' alt='smart' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveSection
