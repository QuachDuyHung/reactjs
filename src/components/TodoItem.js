import React, { Component } from 'react';
import classNames from 'classnames';

import checkImg from './images/check.svg';
import checkedImg from './images/checked.svg';
import closeImg from './images/close.svg';

import './TodoItem.css'

class TodoItem extends Component {
  render() {
    // const {index, item, itemClick } = this.props;
    const {item, itemCompleteClick } = this.props;

    let img = checkImg;
    if (item.isComplete) {
      img = checkedImg;
    }

    return (
      <div 
        // onClick={() => itemClick(index)} 
        // onClick={itemClick}
        className={classNames(
          'TodoItem',
          {isComplete: item.isComplete === true}
        )}
      >
        <div className="item-flex">
          <img onClick={itemCompleteClick} src={img} alt="Complete" title="Complete" />
          <p>{item.title}</p>
        </div>
        <img src={closeImg} alt="Close" title="Close" />
      </div>
    );
  }
}

export default TodoItem;