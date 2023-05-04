import React from 'react';
import { render, screen} from '@testing-library/react';
import LoginWall from './LoginWall';


describe('LoginWall', () => {

  it('debería aparecer el botón de login', () => {
    render(<LoginWall />);
    const loginButton = screen.getByTestId('loginButton');
    expect(loginButton).toBeInTheDocument();
  
  });

});
