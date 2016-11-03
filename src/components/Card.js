import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;


    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
/*
 drop(props, monitor, component) {


 	 const dragIndex = monitor.getItem().index;
    const  dropIndex = props.index;

      if (dragIndex === ddropIndexropId) {
      return;
    }

    props.exchangeCard(dragIndex, dropIndex);




 }
 */

};


class Card extends Component {
 
  render() {
    const { smallImage,designer,id,name,isDragging, connectDragSource, connectDropTarget  } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
    
        <div className='card' style={{ opacity }}>
  	    <img src={'https://styletribute.com'+smallImage }/>
  	    <div>{name}</div>
  	    <div className='designer'>Design by {designer}</div>
  	    </div>
	
      
    ));
  }
}


export default flow(
  DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
})),
  DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
)(Card);




				