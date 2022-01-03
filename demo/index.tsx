import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import Test from 'dist';
import './style.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <Test name="Hello Jinnie" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
