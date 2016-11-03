import React from 'react'



const Card=({smallImage,designer,id,name})=>{

  return (
  	 <div className='card'>
  	    <img src={'https://styletribute.com'+smallImage }/>
  	    <div>{name}</div>
  	    <div>Design by {designer}</div>
	 </div>
	);
};


export default Card

				