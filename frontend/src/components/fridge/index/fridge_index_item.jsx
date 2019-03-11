import React from 'react';

const FridgeIndexItem = ({ food, deleteUserFood, receiveSelectedFood }) => {
  return (
    <div 
      className='fridge-index-item' 
      onClick={() => receiveSelectedFood(food.name)}
      key={food._id}>

      {food.name}

      <div onClick={() => deleteUserFood(food._id)}
        className='remove-item-button'>
        X
      </div>

    </div>
  );
}

export default FridgeIndexItem;

