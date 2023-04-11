import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class FeedbackItem extends Component {
  state = {
    count: 5
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count +1 });
  };


  render() {
    return (
      <div className='card'>
        <div className='card-header bg-warning'>
          {this.formatCount()}
        </div>
        <div className='card-body'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi suscipit reiciendis est asperiores in vero alias accusamus minima dolorum tempore.</p>
          <button onClick={this.handleIncrement} className='btn btn-primary'>Click</button>
          </div>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <><FontAwesomeIcon icon={farFaStar} /><span>{count}</span></> : <><FontAwesomeIcon icon={fasFaStar} /><span>{count}</span></>;
  }
}

export default FeedbackItem
