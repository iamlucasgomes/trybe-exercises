import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import Provider from './context/Provider';
class App extends React.Component {
  render() {
    return (
      <Provider>
        <ColorBox />
      </Provider>
    );
  }
}
export default App;