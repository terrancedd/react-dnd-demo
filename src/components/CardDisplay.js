import React from 'react'
import Card from './Card'

const CardDisplay=({products})=>{

	return (
		<ul className='display'>
		{
			
			products.map(product=>{
			   
			   return (<Card key={product.id} {...product} />)
			}
			)

		}
		</ul>
	);
};


export default CardDisplay