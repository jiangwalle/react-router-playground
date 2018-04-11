import React, { Component } from 'react';
import blackp from '../assets/blackp.jpg';
import earlyman from '../assets/earlyman.jpg';
import baaghi from '../assets/baaghi.jpg';
import '../index.css';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  render() {
    const movies = [
      {'id': 1, 'name': '黑豹', 'pic': blackp, 'desc': '激情动作片'},
      {'id': 2, 'name': 'Early Man', 'pic': earlyman, 'desc': '动画片'},
      {'id': 3, 'name': 'BAAGHI2', 'pic': baaghi, 'desc': '胸很大'}
    ]

    return (
      <div className='container'>
        { movies.map(movie => <Card {...movie} />) }
      </div>
    )
  }
}

const Card = ({pic, name, desc, id}) => (
  <div className='card'>
    <Link to={`/movie/${id}`}><img src={pic} style={{width: '100%'}} /></Link>
    
    <div className='content'>
      <h4><b>{name}</b></h4>
      <p>{desc}</p>
    </div>
  </div>
)