import React, { Component } from 'react';
import '../src/css/index.css';

class List extends Component {
    render() {
        return <div className="flex-style">
            {this.props.data.map((el, index) => (
            <div className="box" key={el.id}>
                <div className="box-title"><b>{el.name}</b></div>
                <img className="image-fit" src={el.image}/>
                <h3>Price - ${el.price}</h3>
                <div className="purchase-box" >Buy</div>
                <p>{el.description}</p>
            </div>
            ))}
        </div>;
      }
}
export default List;