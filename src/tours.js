import React from 'react';
import Tour from './tour';

const Tours = ({ tours, handleNotInterested }) => {
  return (
    <section>
      <div>
        <h2 className='title text-center'>Ours tours</h2>
        <div className='seperate'></div>
      </div>
      <div className='main'>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              handleNotInterested={handleNotInterested}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
