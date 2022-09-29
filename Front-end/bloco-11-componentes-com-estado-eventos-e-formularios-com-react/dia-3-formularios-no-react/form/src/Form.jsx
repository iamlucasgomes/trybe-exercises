import React from "react";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    text: '',
    OS: 'Linux',
    checked: false,
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
        <form>
          <h1>Formulário aula 11.3</h1>
          <fieldset>
            <div>
              <label htmlFor="OS">Sistema Operacional</label></div>
            <select name="OS" id="OS" onChange={this.handleChange}>
              <input type="checkbox" id="os" />
              <option value="Linux">Linux</option>
              <option value="MacOS">MacOS</option>
            </select>
            <TextArea value={this.state.text} handleChange={this.handleChange} />
            <Checkbox value={this.state.checked} handleChange={this.handleChange} />
            <div>
              <input type="file" />
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
