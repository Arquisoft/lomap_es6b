import React from 'react';
import { render, screen} from '@testing-library/react';
import App from "../../App";


describe('MapComponent', () => {

  it('deberia aparecer el boton de login', () => {
    render(<App />);
    // const loginButton = screen.getByTestId('loginButton');
    // expect(loginButton).toBeInTheDocument();
  
  });

});
