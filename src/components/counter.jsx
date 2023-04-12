import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.formatBadge()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.value)} className='btn btn-primary me-2'>+</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-close align-self-center'></button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter === 0 ? <span>Zero</span> : this.props.counter;
  }

  formatBadge() {
    let classes = "badge m-2 bg-"
    return classes += this.props.value === 0 ? "warning" : "primary";
  }
}

export default Counter
