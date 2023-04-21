import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class Counter extends Component {
  render() {
    return (
      <div className="cart-card container">
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-x">
          <FontAwesomeIcon icon={faXmark} className='fs-5'/>
        </button>
        <div className="row align-items-center cart-card-content-wrapper">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={this.props.counter.img_url} alt={this.props.img_copyright} className='img-fluid'/>
          </div>
          <div className="col-md-8">
            <div className="details">
            <h2>{this.formatCount() > 1 ? <>{this.formatCount()}<FontAwesomeIcon icon={faXmark} className='fs-5'/> </> : null}{this.props.counter.title}</h2>
              <p>{this.props.counter.description}</p>
              <span className='fs-6'>
                <i><FontAwesomeIcon icon={fasFaStar} /></i>
                <i><FontAwesomeIcon icon={fasFaStar} /></i>
                <i><FontAwesomeIcon icon={fasFaStar} /></i>
                <i><FontAwesomeIcon icon={fasFaStar} /></i>
                <i><FontAwesomeIcon icon={faStarHalfAlt} /></i>
                {'  '}
                {this.props.counter.rating}
              </span>
            </div>
            <div className="price">
              <div className="col">
                <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-outline-dark me-2'>-</button>
                <span className='btn btn-outline-dark border-0 me-2'>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-outline-dark me-2'>+</button>
              </div>
              <div className="col text-end">
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
