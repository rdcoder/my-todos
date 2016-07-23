import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import configStore from './components/configStore';
import Root from './components/Root';

const store = configStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
