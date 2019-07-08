import React from 'react';


import Card from './Card';

const CardList=({robots})=> {
	//if(true) throw new Error('messed up'); //to check if errorboundary is working or not
	 const allRobo = robots.map((robots) =>
  <Card key={robots.id} id={robots.id} name={robots.name}  email={robots.email}/>
);
  return (
    <div >
{allRobo}
    </div>
  );
}

export default CardList;

