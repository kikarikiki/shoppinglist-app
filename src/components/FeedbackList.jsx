import React, { Component } from 'react';
import { getFeedbacks } from '../data/FeedbackData';
import FeedbackItem from './FeedbackItem';

class FeedbackList extends Component {


  state = {
    feedbacks: getFeedbacks()
  };

  handleDelete = (feedbackId) => {
    const feedbacks = this.state.feedbacks.filter(f => f.id !== feedbackId);
    this.setState({ feedbacks: feedbacks });
  };

  render() {
    const { length: count } = this.state.feedbacks

    if (count === 0)
      return <p>There are no feedbacks in the database.</p>;

    return (
      <>
        {this.state.feedbacks.map(feedback =>
          <FeedbackItem
            key={feedback.id}
            onDelete={this.handleDelete}
            user={feedback.user}
            text={feedback.text}
            rating={feedback.rating}
            id={feedback.id}
            />
          )}
      </>
    );
  }
}

export default FeedbackList

{/* <div>
<p>Showing {count} feedbacks in the database. </p>
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
</div> */}
