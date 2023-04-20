import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4, price: 9.99 },
      { id: 2, value: 0, price: 5.99 },
      { id: 3, value: 0, price: 1.99 },
      { id: 4, value: 0, price: 5.99 }
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };


  render() {
    const { length: count } = this.state.counters

    //stats
    //calculate ratings
    let total = this.state.counters.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);

    //displaying averageRating with one dezimal only
    total = total.toFixed(1).replace(/[.,]0$/, '')


    if (count === 0)
      return <p>There are no items</p>;

    return (
    <>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <div className="d-flex justify-content-between mb-2">
          <h5>{count} Items</h5>
          <h5>Total: {isNaN(total) ? 0 : total}</h5>
        </div>
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}
        />
      </main>
    </>
    )
  }
}

export default App
