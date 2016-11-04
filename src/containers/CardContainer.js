import React from 'react'
import { connect } from 'react-redux'
import CardDisplay from '../components/CardDisplay'




const CardContainer =({products}) =>{
       return (
			<div className='browse'>
				<div className='box'>
					<CardDisplay  
						cards={ 
							products.map(
								product=>({
                         			id:product.id,
                         			name:product.name,
                         			smallImage:product.smallImage,
                         			designer:product.designer,
                         			stylesort:product.stylesort
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
