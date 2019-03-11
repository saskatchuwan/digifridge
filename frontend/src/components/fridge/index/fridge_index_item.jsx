import React from 'react';
import trash from '../../../images/icons/trash.svg';

const FridgeIndexItem = ({ selectedFoods, food, handleSelect, handleDeselect, handleRemove }) => {
  let display;

  if (selectedFoods.includes(food.name)) {
    display = <div 
                className='fridge-index-item' 
                onClick={() => handleDeselect(food.name)}
                id='selected'
                key={food._id}>

                {food.name}

                <div onClick={(e) => {handleRemove(food); e.stopPropagation()}}
                  className='remove-item-button'>
                  <img src={trash} alt="no trash icon" />
                </div>
              </div>
  } else {
    display = <div 
                className='fridge-index-item' 
                onClick={() => handleSelect(food.name)}
                key={food._id}>

                {food.name}

                <div onClick={(e) => {handleRemove(food); e.stopPropagation()}}
                  className='remove-item-button'>
                  <img src={trash} alt="no trash icon" />
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

