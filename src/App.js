import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
// import TrafficLight from './components/TrafficLight';

import checkAll from './components/images/check-all.svg';

class App extends Component{
  constructor() {
    super();
    this.state = {
      newItem: '',
      curentFillter: 'all', // 'all', 'active', 'complete'
      todoItems: [
        { title: 'Hưng', isComplete: true },
        { title: 'Đẹp' },
        { title: 'Trai' }
      ]
    };

    // this.state = {
    //   currentColor: 0,
    //   option: [
    //     {
    //       name: "red",
    //       value: 0,
    //       delay: 10000
    //     },
    //     {
    //       name: "yellow",
    //       value: 1,
    //       delay: 1000
    //     },
    //     {
    //       name: "green",
    //       value: 2,
    //       delay: 2000
    //     },
    //  ],
    // }

    // setInterval(() => {
    //   this.setState({
    //     currentColor: this.getNextColor(this.state.currentColor)
    //   });
    // }, this.timeLine(this.state.currentColor));
  }

  // getNextColor = (color) => {
  //   const { option } = this.state;
  //   switch (color) {
  //      case 0: return option[1].value;
  //      case 1: return option[2].value;
  //      default: return option[0].value;
  //   }
  // }

  // timeLine = (seconds) => {
  //   const { option } = this.state;
  //   switch (seconds) {
  //     case 0: return option[0].delay;
  //     case 1: return option[1].delay;
  //     default: return option[2].delay;
  //   }
  // }

  // Tự làm
  // onItemClicked = (index) => {
  //   let newArr = this.state.todoItems.map((item, key) => {
  //     if(key === index) {
  //       item.isComplete = !item.isComplete;
  //     }
  //     return item;
  //   });
  //   this.setState({
  //     todoItems: [...newArr]
  //   });
  // }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp = (event) => {
    if (event.keyCode === 13) {
      let text = event.target.value;
      text = text.trim();
      if (!text) return;
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange = (event) => {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    // const { currentColor } = this.state;
    const { newItem, todoItems } = this.state;
    return (
      <div className="App">
        <div className="check-input">
          <img src={checkAll} alt="check-all" title="" />
          <input 
            type="text" 
            placeholder="Enter new item here" 
            value={newItem} 
            onKeyUp={this.onKeyUp} 
            onChange={this.onChange}
          /> {/* thay đổi value phải đi cùng với onChange */}
        </div>
        {
          todoItems.length > 0 && todoItems.map((item, index) => (
            <TodoItem 
              key={index} 
              // index={index} 
              item={item} 
              itemCompleteClick={this.onItemClicked(item)} 
            />
          ))
        }
        {
          todoItems.length === 0 && 'Empty.'
        }

        {/* <TrafficLight currentColor={currentColor} /> */}
      </div>
    );
  }
}

export default App;
