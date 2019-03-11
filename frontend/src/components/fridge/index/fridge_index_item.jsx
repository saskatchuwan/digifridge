import React from 'react';

const FridgeIndexItem = ({ selectedFoods, food, deleteUserFood, handleSelect }) => {
  let display;

  if (selectedFoods.includes(food.name)) {
    display = <div 
                className='fridge-index-item' 
                onClick={() => handleSelect(food.name)}
                id='selected'
                key={food._id}>

                {food.name}

                <div onClick={(e) => {deleteUserFood(food._id); e.stopPropagation()}}
                  className='remove-item-button'>
                  X
                </div>
              </div>
  } else {
    display = <div 
                className='fridge-index-item' 
                onClick={() => handleSelect(food.name)}
                key={food._id}>

                {food.name}

                <div onClick={(e) => {deleteUserFood(food._id); e.stopPropagation()}}
                  className='remove-item-button'>
                  X
                </div>
              </div>
  }

  return (
    <>
      {display}
    </>
  );
}

export default FridgeIndexItem;

