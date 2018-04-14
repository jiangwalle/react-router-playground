import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className='container'>Movie detail {match.params.id}</div>
    )
  }
}