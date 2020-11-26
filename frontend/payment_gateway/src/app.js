import React, { Component } from 'react';
import '../src/css/payment_gateway.css';
import axios from 'axios';

class App extends Component {
   constructor(props) {
      super(props); 
      this.state = {
         card: '',
         cvv: '',
         expiry: '',
       };
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
   submitDetails = () => {
      e.preventDefault();
      const { card, cvv, expiry } = this.state;

    axios.post('./submit.php', { card, cvv, expiry })
      .then((result) => {
        // results 
      });
   }
   render() {
      const { card, cvv, expiry } = this.state;
      return (
         <div className = "App">
            <form>
            <div><label>Enter card number: </label><input type="text" name="card" value={card} onChange={this.handleChange} /></div>
            <div><label>Enter cvv: </label><input type="text" name="cvv" value={cvv} onChange={this.handleChange} /></div>
            <div><label>Enter expiry month: </label><input type="text" name="expiry" value={expiry} onChange={this.handleChange} /></div>
            <div>
               <button onClick = {() => submitDetails()}>Pay</button>
            </div>
            </form>
         </div>
      );
   }
}
export default App;