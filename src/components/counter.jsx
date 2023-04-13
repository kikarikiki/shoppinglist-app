import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.props.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2"}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.value)} className='btn btn-primary me-2'>+</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-close align-self-center'></button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter === 0 ? <span>Zero</span> : this.props.counter;
  }
}

export default Counter
