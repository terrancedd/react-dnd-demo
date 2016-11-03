import { combineReducers } from 'redux'



const products=(state=[],action)=>{
	switch(action.type){

		case 'RECEIVE_PRODUCTS':
			return [
        		...state,
        		...action.products.map((obj)=>({...obj}))
     		 ]
      	default:
     		 return state;
   }
};


export default products

