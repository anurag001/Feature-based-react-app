import React, { Component } from 'react';
import List from './listposts';
import axios from 'axios';

 
class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         recipes: []
      }
   };

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/recipe')
      .then(res => {
        const recipesData = res.data;
        this.setState({recipes:recipesData});
      })
  }

  render() {
    return (
      <ul>
        <List data={this.state.recipes}/>
      </ul>
    )
  }
}
export default Message;