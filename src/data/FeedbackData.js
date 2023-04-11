const FeedbackData = [
  {
    id: 1,
    user: 'happyBlogger',
    rating: 5,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eveniet quam minima perferendis architecto facere est quidem commodi ea. Nisi, voluptatibus alias repellat cupiditate cumque natus distinctio debitis doloribus similique.'
  },
  {
    id: 2,
    user: 'draganXXX',
    rating: 3,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio natus voluptate repudiandae. Veniam, dicta libero.'
  },
  {
    id: 3,
    user: 'marylinMaginson',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, distinctio.'
  }
]

export function getFeedbacks() {
  return FeedbackData;
}

export function getFeedback(id) {
  return FeedbackData.find(f => f._id === id);
}

export default FeedbackData
