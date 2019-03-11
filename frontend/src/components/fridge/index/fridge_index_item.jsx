import React from 'react';

const FridgeIndexItem = ({ food, deleteUserFood, handleSelect }) => {
  return (
    <div 
      className='fridge-index-item' 
      onClick={() => handleSelect(food.name)}
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

