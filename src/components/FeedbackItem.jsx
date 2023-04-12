import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class FeedbackItem extends Component {
  render() {
    return (
      <div className='card mb-4'>
        <div className='card-header border-0 bg-transparent py-3 d-flex justify-content-between align-item-center'>
          <span>{this.formatCount()}</span>
          <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-close align-self-center'></button>
        </div>
        <div className='card-body'>
          <p>{this.props.text}</p>
          {/*<button onClick={() => this.props.onIncrement(this.props.rating)} className='btn btn-primary me-2'>Increment</button>*/}
        </div>
      </div>
    );
  }

  formatCount() {
    return this.props.rating === 0 ? <><FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/><span>{this.props.rating}</span></> : <><FontAwesomeIcon icon={fasFaStar}  className='text-warning me-2'/><span>{this.props.rating}</span></>;
  }
}

export default FeedbackItem
