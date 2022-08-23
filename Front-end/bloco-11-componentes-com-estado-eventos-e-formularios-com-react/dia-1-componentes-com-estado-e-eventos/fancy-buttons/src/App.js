import React from 'react';
import './App.css';



class App extends React.Component {

  state = {
    count1: 0,
    count2: 0,
    count3: 0,
  }

  hello = () => {
    this.setState((previousState, props) => ({
      count1: previousState.count1 +1
    }))
  }
  
  weather = () => {
    this.setState((previousState, props) => ({
      count2: previousState.count2 +1
    }))
  }
  
  where = () => {
    this.setState((previousState, _props) => ({
      count3: previousState.count3 +1
    }))
  }
  render() {
    const { count1, count2, count3 } = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.hello}>{count1}</button><button onClick={this.weather}>{count2}</button><button onClick={this.where}>{count3}</button>
        </header>
      </div>
    );
  }
}

export default App;
