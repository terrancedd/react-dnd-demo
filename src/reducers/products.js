import { combineReducers } from 'redux'



const products=(state=[],action)=>{
	switch(action.type){

		case 'RECEIVE_PRODUCTS':

			//action.products.sort(function(a,b){return a.id-b.id;});

			return [
        		...state,
        		...action.products.map((obj)=>({...obj}))
     		 ]
      	default:
     		 return state;
   }
};


export default products

