import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class Counter extends Component {
  render() {
    return (
      <div className="card cart-card container mb-3">
        <div className="card-header text-end border-0 bg-transparent pt-3 pb-0">
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-close align-self-center'></button>
        </div>
        <div className="card-body row align-items-center pt-0">
          <div className="col-md-4 justify-content-center">
            <img src={this.props.counter.img_url} alt={this.props.img_copyright} className='img-fluid'/>
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <h2>{this.formatCount() > 1 ? this.formatCount() + ' x ' : null}{this.props.counter.title}</h2>
              <p>{this.props.counter.description}</p>
              <span className='fs-6'>
                <FontAwesomeIcon icon={fasFaStar} className='text-warning'/>
                <FontAwesomeIcon icon={fasFaStar} className='text-warning'/>
                <FontAwesomeIcon icon={fasFaStar} className='text-warning'/>
                <FontAwesomeIcon icon={fasFaStar} className='text-warning'/>
                <FontAwesomeIcon icon={fasFaStar} className='text-warning'/>
                {'  '}
                {this.props.counter.rating}
              </span>
            </div>
            <div className="row border-top pt-3">
              <div className="col">
                <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-outline-dark me-2'>-</button>
                <span className='btn btn-outline-dark border-0 me-2'>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-outline-dark me-2'>+</button>
              </div>
              <div className="col text-end align-self-center">
                <span className='fs-4 my-2 text-end'>{this.props.counter.price * this.formatCount()}€</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  formatCount() {
    let { value } = this.props.counter;
    return value;
  }
}

export default Counter
