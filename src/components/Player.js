import React from 'react';
import PlayerDetails from './PlayerDetails';


function Player (props) {
  return (
    <div className='c-player'>
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails />
      {/* {CONTROLS} */}
      <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist} </p>
    </div>
  )
}

export default Player;
