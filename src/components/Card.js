import React from 'react';


const Card=({name,id,email,i})=> {
	 
  return (
    <div className='bg-light-green dib grow br4 pa3 ma2 bw2'>
      <img alt='Robo' src= {'https://robohash.org/f' + id+'?200x100'}/>
     <div>
     <h2>{name}</h2>
     <p>{email}</p></div>
    </div>
  );
}

export default Card;
