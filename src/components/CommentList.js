import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CommentList extends Component {
  renderComments = () =>
    this.props.comments.map(comment => <li key={comment}>{comment}</li>);
    
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(
  mapStateToProps,
  null,
)(CommentList);
