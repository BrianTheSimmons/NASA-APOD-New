import React from 'react';
import { GiGalaxy } from 'react-icons/gi';

const Apod = ({ apod, title, description }) => {
  return (
    <div>
        {/* container */}
        <div className='apod-container'>
            {/* image container */}
            <div className='image-container'>
                {/* generate APOD img */}
                <img src={apod} alt="NASA Apod" className='w-full' />
            </div>
            {/* Text Container */}
            <div className='content'>
                {/* Generate APOD text */}
                <h2>{title}</h2>
                <p className='apod-description'> <GiGalaxy className='galaxy-icon' /> {description}</p>
            </div>
        </div>
    </div>
  )
}

export default Apod