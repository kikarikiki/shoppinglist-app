import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class FeedbackItem extends Component {
  state = {
    user: this.props.user,
    rating: this.props.rating,
    text: this.props.text,
    id: this.props.id
  };

  handleIncrement = () => {
    this.setState({ rating: this.state.rating +1 });
  };


  render() {
    return (
      <div className='card my-4'>
        <div className='card-header'>
          {this.state.user}
        </div>
        <div className='card-body'>
          <p>{this.formatCount()}</p>
          <p>{this.state.text}</p>
          <button onClick={this.handleIncrement} className='btn btn-primary me-2'>Increment</button>
          <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger'>Delete</button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { rating } = this.state;
    return rating === 0 ? <><FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/><span>{rating}</span></> : <><FontAwesomeIcon icon={fasFaStar}  className='text-warning me-2'/><span>{rating}</span></>;
  }
}

export default FeedbackItem
