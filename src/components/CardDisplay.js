import Card from './Card';
import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import InfiniteScroll from 'react-infinite-scroll-component';


 class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.state = {cards:props.cards.slice(0,48)};
    
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];
    const hoverCard=cards[hoverIndex];
    const after_hoverCard={...dragCard, id:hoverCard.id,key:hoverCard.id};
    const after_dragCard={...hoverCard, id:dragCard.id, key:dragCard.id};
   
    
    this.setState(
      update(this.state,{
                    cards: {
                      $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard]
                      ]
                    }
                }
            )
    );

  
  
  }

  loadMore(){
   
  	let index=this.state.cards.length-1;
    let lastIndex=index+24;
  	if(lastIndex>this.props.cards.length-1) lastIndex=this.props.cards.length-1;

  	setTimeout(()=>{
      this.setState(
        update(this.state,{
          cards:{
  				  $push:this.props.cards.slice(index+1,lastIndex+1)
			    }
		    })
	    )
    },500);
  }


  updateProduct(dropIndex){

    const { cards } = this.state;
    const before=dropIndex-1;
    const after=dropIndex+1
    
    let beforeSortValue=0;
    let afterSortValue=this.props.cards[this.props.cards.length-1].stylesort;


    if(before>=0) beforeSortValue=cards[before].stylesort;
    if(after<=this.props.cards.length-1) afterSortValue=cards[after].stylesort;

    let newSortValue=(beforeSortValue+afterSortValue)/2;
    let updatedProduct={...cards[dropIndex],stylesort:newSortValue};


    console.log('beforeSortValue: '+ beforeSortValue);
    console.log('afterSortValue '+ afterSortValue);
    console.log('Setting sort value of '+ cards[dropIndex].id+' to '+ newSortValue);
   
    this.setState(
      update(this.state,
              { 
    	          cards: { [dropIndex]:{
    						         $set: updatedProduct
    					         }
    				
				        }
		          }
		  )
      );

  }


  render() {
    const { cards } = this.state;

    return (
     <div>
      <InfiniteScroll 
          style={{ 'display': 'flex',
                   'flexFlow': 'row wrap'  
                }}
          next={this.loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
        {
          cards.map((card, i) => {
            return (
              <Card key={card.id}
                  index={i}
                  id={card.id}
                  smallImage={card.smallImage}
                  designer={card.designer}
                  name={card.name}
                  stylesort={card.stylesort}
                  moveCard={this.moveCard}
                  updateProduct={this.updateProduct} 
              />
            );
          })
        }
      </InfiniteScroll>
     </div>
    );
  }
}


export default DragDropContext(HTML5Backend)(CardDisplay)
