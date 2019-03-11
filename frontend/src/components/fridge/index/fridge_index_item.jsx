import React from 'react';

const FridgeIndexItem = ({ food, receiveSelectedFood, deleteUserFood}) => {
  return (
    <div 
      className='fridge-index-item' 
      onClick={() => receiveSelectedFood(food.name)}
      key={food._id}>

      {food.name}

      <div onClick={(e) => {deleteUserFood(food._id); e.stopPropagation()}}
        className='remove-item-button'>
        X
      </div>

    </div>
  );
}

export default FridgeIndexItem;

