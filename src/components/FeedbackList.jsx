import React, { Component } from 'react';
import { getFeedbacks } from '../data/FeedbackData';

class FeedbackList extends Component {


  state = {
    feedbacks: getFeedbacks()
  };

  render() {
    const { length: count } = this.state.feedbacks

    if (count === 0)
      return <p>There are no movies in the database.</p>;

    return (
      <>
      <p>Showing {count} feedbacks in the database. </p>
      <div>
        {this.state.feedbacks.map(feedback => (
          <div key={feedback._id} className='card my-4'>
            <div className='card-header'>
              {feedback.user}
            </div>
            <div className='card-body'>
              <p>{feedback.text}</p>
            </div>
            <div className="card-footer bg-warning">{feedback.rating}</div>
          </div>
      ))}
      </div>
      </>
    )
  }
}

export default FeedbackList
