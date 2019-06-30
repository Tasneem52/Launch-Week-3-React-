import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      selectedAnswerId: null,
      showResult: null
    }
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this)
  }

  handleAnswerSelection(id) {
    this.setState({selectedAnswerId: id})
    if (id === this.props.correctAnswerId) {
      this.setState({showResult: "Correct!"})
    } else {
      this.setState({showResult: "Incorrect"})
    }
  }

  render() {
    const answers = this.props.answers.map((answer) => {

      let handleClickClosure = () => {
        return this.handleAnswerSelection(answer.id)
      }

      let selectedClass=""
      if (this.state.selectedAnswerId === answer.id) {
        selectedClass="selected"
      }

      return <Answer
        key={answer.id}
        id={answer.id}
        body={answer.body}
        handleClick={handleClickClosure}
        selectedClass={selectedClass}
      />
    })

    let showResultClass = ""
      if (this.state.showResult === "Correct!") {
        showResultClass = "correct"
      }
      if (this.state.showResult === "Incorrect") {
        showResultClass = "incorrect"
      }

    return(
      <div className="question">
        <h2>{this.props.body}</h2>
        {answers}
        <div className={showResultClass}>{this.state.showResult}</div>
      </div>
    )
  }
}

export default Question
