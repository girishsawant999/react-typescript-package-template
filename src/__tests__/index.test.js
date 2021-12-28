import BaseComponent from '../';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Test for base component', () => {
  it('should render the base component without crash', () => {
    const div = document.createElement('div');

    ReactDOM.render(<BaseComponent />, div);
    expect(div.querySelector('h2').textContent).toBe(
      'Welcome To react loading button',
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
