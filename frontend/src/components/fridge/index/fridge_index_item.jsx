import React from 'react';

const FridgeIndexItem = ({ food, deleteUserFood }) => {
  return (
    <div className='fridge-index-item' key={food._id}>
      {food.name}
      <div onClick={() => deleteUserFood(food._id)}
        className='remove-item-button'>
        X
      </div>
    </div>
  );
}

export default FridgeIndexItem;

