import React from 'react';

const No_tours = ({ fetchData }) => {
  return (
    <div>
      <h1 className='text-center'>No tours left</h1>
      <button
        className='refresh-btn'
        onClick={() => {
          fetchData();
        }}
      >
        Refesh
      </button>
    </div>
  );
};

export default No_tours;
