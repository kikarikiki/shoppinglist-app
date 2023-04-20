import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.props.counter.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2"}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter.value)} className='btn btn-primary me-2'>+</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-close align-self-center'></button>
      </div>
    );
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? <span>Zero</span> : value;
  }
}

export default Counter
