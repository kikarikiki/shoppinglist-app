import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 1, title: 'Samsara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', value: 1, price: 9.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/422084746/650x650x2/goldfruchtpalme-areca-s.jpg', img_copyright: 'https://www.fleurdirect.com/gold-palm-areca-klein.html' },
      { id: 2, title: 'Kunundu', description: 'Lorem ipsum dolor sit amet', value: 1, price: 5.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/428421693/650x650x2/calathea-medaillon.jpg', img_copyright: 'https://www.fleurdirect.com/calathea-lebende-pflanze-braun.html' },
      { id: 3, title: 'Bagashi', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing', value: 1, price: 1.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/419441205/calathea-beauty-star.jpg', img_copyright: 'https://www.fleurdirect.com/calathea-beauty-star.html' },
      { id: 4, title: 'Tremendor', description: 'Lorem ipsum dolor sit amet consectetur', value: 1, price: 5.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/419479182/orangenbaum-m-in-terrakotta.jpg', img_copyright: 'https://www.fleurdirect.com/orange-baum-mittel-in-terra-cotta.html' }
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

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    return (counters[index].value > 0) ? this.setState({ counters }) : 0;
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 1;
      return c;
    });
    this.setState({ counters });
  };





  render() {

    // Sum of Cart
    const items = this.state.counters;
    let cartTotal = items.reduce((acc, cur)=> {
      return acc + (cur.value * cur.price);

    // Display cartTotal with one dezimal only
    }, 0);

    // Sum of Items in Cart
    const { length: count } = this.state.counters
    cartTotal = cartTotal.toFixed(2).replace(/[.,]0$/, '');

    return (
    <>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <div className="d-flex justify-content-between mb-2">
          <h5>{count} Items</h5>
          <h5>Total: {isNaN(cartTotal) ? 0 : cartTotal}€</h5>
        </div>
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          counters={this.state.counters}
        />
      </main>
    </>
    )
  }
}

export default App
