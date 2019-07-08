import React from 'react';


import Card from './Card';

const CardList=({robots})=> {
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

