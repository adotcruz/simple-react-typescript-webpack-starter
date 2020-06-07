// global stylesheet
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './root';

const wrapper = document.getElementById('container');

// tslint:disable-next-line: no-unused-expression
wrapper && ReactDOM.render(<Root />, wrapper);
