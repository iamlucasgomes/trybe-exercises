import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';
import './App.css'

describe('Testando o componente App', () => {
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
it('Testando se a mensagem "Email Inválido" não é exibida ao renderizar a pagina', () => {
  render(<App />)
  const isValid = screen.queryByText('Email Inválido');
  expect(isValid).not.toBeInTheDocument();
})
})