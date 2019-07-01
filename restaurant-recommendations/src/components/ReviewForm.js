import React, {Component} from 'react'

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: null,
      content: ''

    }
    this.handleNameChange =this.handleNameChange.bind(this)
    this.handleScoreChange =this.handleScoreChange.bind(this)
    this.handleReviewChange =this.handleReviewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      restaurant_id:  this.props.restaurant_id,
      name: '',
      rating: '',
      content: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let payload =
    {
      restaurant_id: this.props.restaurant_id,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    this.props.addItem(payload)
    this.handleClearForm(event)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})

  }

  handleScoreChange(event) {
    this.setState({rating: event.target.value})
  }

  handleReviewChange(event) {
    this.setState({content: event.target.value})

  }

  render() {

    return (
      <div>
        <form className="callout" id="review-form">
        <h1>Please leave a review</h1>
        <div>
          <label> Name:</label>
          <input onChange={this.handleNameChange} value={this.state.name} type="text" id="name" name="name" />
        </div>

        <div>
        <label htmlFor="score">Score
          <select onChange={this.handleScoreChange} value={this.state.rating} name="score">
            <option value={0}></option>
            <option value={20}>1 Star</option>
            <option value={40}>2 Star</option>
            <option value={60}>3 Star</option>
            <option value={80}>4 Star</option>
            <option value={100}>5 Star</option>
          </select>
        </label>
        </div>

      <div>
      <label htmlFor="review">Review</label>
      <input onChange={this.handleReviewChange} value={this.state.content} type="text" id="review" name="review" />
      </div>

      <input onClick={this.handleSubmit} type="submit" className="button" value="Submit "/>
      </form>
      </div>
    )
  }
}
export default ReviewForm
