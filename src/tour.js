import React, { useState } from 'react';

const Tour = ({ tour, handleNotInterested }) => {
  const { id, name, info, image, price } = tour;

  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <article className='item'>
      <div className='img-wrapper'>
        <img src={image} alt='' />
      </div>

      <div className='infor-wrapper'>
        <p className='name_price'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </p>
        <p className='desc'>
          {isReadMore ? info.substring(0, 200) + '...' : info}
          <button
            className='readmore-btn'
            onClick={() => {
              setIsReadMore(!isReadMore);
            }}
          >
            {isReadMore ? 'Read More' : 'Show Less'}
          </button>
        </p>
        <button
          className='not-interested-btn'
          onClick={() => {
            handleNotInterested(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
