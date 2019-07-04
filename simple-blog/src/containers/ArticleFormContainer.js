import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: '',
      errors: {}
    }
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateArticlesInput = this.validateArticlesInput.bind(this);
  }

  formChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  validateArticlesInput(input) {
    if (input.trim() === '') {
      let newError = { articleTitle: 'You must enter a article title and body' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.articleTitle
      this.setState({ errors: errorState })
      return true
    }
  }

  clearForm(event) {
    event.preventDefault();
    this.setState({
      articleTitle: '',
      articleBody: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const formPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody
    }

    if (this.validateArticlesInput(this.state.articleTitle) &&
        this.validateArticlesInput(this.state.articleBody)) {
      this.props.addNewArticle(formPayload);
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="new-article-form callout" onSubmit={this.handleSubmit}>
        {errorDiv}
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          handlerFunction={this.formChangeHandler}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          handlerFunction={this.formChangeHandler}
        />

        <div className="button-group">
          <button className="button" onClick={this.clearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
