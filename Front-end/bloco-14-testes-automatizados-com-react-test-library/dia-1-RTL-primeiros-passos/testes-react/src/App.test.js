import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import './App.css'

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

