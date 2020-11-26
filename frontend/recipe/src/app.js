import React, { Component } from 'react';
import Message from '../src/message.js';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Message/>
            </header>
         </div>
      );
   }
}
export default App;