import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/App.scss'
import '../src/styles/Cart_Card.scss'
import '../src/styles/Bootstrap_Overwrites.scss'
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 1, title: 'Samsara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero dicta inventore expedita fuga adipisci doloremque sint sit dolore atque! Nemo, quia reiciendis', value: 1, price: 9.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/422084746/650x650x2/goldfruchtpalme-areca-s.jpg', img_copyright: 'https://www.fleurdirect.com/gold-palm-areca-klein.html' },
      { id: 2, title: 'Kunundu', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium minus, laudantium placeat incidunt explicabo.', value: 1, price: 5.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/428421693/650x650x2/calathea-medaillon.jpg', img_copyright: 'https://www.fleurdirect.com/calathea-lebende-pflanze-braun.html' },
      { id: 3, title: 'Bagashi', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, tempore aliquam quo velit expedita officia aut eius nemo est ex?', value: 1, price: 1.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/419441205/calathea-beauty-star.jpg', img_copyright: 'https://www.fleurdirect.com/calathea-beauty-star.html' },
      { id: 4, title: 'Tremendor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates deleniti fugiat consectetur et dolorem officiis optio odit animi enim.', value: 1, price: 5.99, rating: 5.5, img_url: 'https://cdn.webshopapp.com/shops/344336/files/419479182/orangenbaum-m-in-terrakotta.jpg', img_copyright: 'https://www.fleurdirect.com/orange-baum-mittel-in-terra-cotta.html' }
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

    const items = this.state.counters;

    // Sum of Cart
    let cartTotal = items.reduce((acc, cur) => {
      return acc + (cur.value * cur.price);

    // Display cartTotal with one dezimal only
    }, 0);

    // Sum of Items in Cart
    const { length: count } = this.state.counters
    cartTotal = cartTotal.toFixed(2).replace(/[.,]0$/, '');

    return (
    <>
      <NavBar totalProducts={this.state.counters.reduce((acc, cur) => { return acc + cur.value }, 0)} totalCart={isNaN(cartTotal) ? 0 : cartTotal} />
      <main className='container'>
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
