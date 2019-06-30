import React from 'react';
import Question from '../components/Question'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const question = this.props.data.question

    return(
      <div>
        <Question
          id={question.id}
          body={question.body}
          correctAnswerId={question.correctAnswerId}
          answers={question.answers}
        />
      </div>
    )
  }
}

export default App
