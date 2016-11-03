import React from 'react'
import { connect } from 'react-redux'
import CardDisplay from '../components/CardDisplay'




const CardContainer =({products}) =>{
       
    console.log(products[0]);

		return (
			<div className='browse'>
				<div className='box'>
					<CardDisplay  
						
						cards={ products.map(product=>({
                         				id:product.id,
                         				name:product.name,
                         				smallImage:product.smallImage,
                         				designer:product.designer
										})
									)
								} 
					  />
				</div>
			</div>
			)
	}


const mapStateToProps=state=>({products:state.products});

export default connect(mapStateToProps)(CardContainer);
