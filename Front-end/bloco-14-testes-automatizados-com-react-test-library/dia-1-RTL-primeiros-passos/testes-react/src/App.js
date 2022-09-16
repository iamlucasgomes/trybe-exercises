import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      emailSent: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '', emailSent: true });
  }

  render() {
    const { email, saveEmail, emailSent } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        {emailSent &&
        <>
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
        </>
        }
      </div>
    );
  }
}

export default App;