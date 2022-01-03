import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../';

describe('Test to check component', () => {
  it('should render component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component name="Jinnie" />, div);
    expect(div.textContent).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });
});
