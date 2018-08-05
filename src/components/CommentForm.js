import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentForm extends Component {
  state = {
    comment: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.commentSave(this.state.comment);
    this.setState({ comment: '' });
  };

  handleChange = event => this.setState({ comment: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  actions,
)(CommentForm);
