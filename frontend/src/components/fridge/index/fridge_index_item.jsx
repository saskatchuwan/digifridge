import React from 'react';

// could also destructure the props: ({ album, song, artist, fetchSong })
const FridgeIndexItem = (props) => {
  return (
    <li className='fridge-index-item'>
      {props.food.name}
    </li>
  );
}

export default FridgeIndexItem;

