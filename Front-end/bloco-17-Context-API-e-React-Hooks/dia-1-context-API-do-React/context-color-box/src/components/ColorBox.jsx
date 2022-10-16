import React from 'react';
import '../styles/box.css';
import { MyContext } from '../context/Provider'

class ColorBox extends React.Component {
  render() {
    const { color, HandleChangeColor} = this.context
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: color } }
        onClick={ ()  => HandleChangeColor() }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType= MyContext
export default ColorBox;