import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box';


let wrapperParagraph = 'Lorem ipsum dolor sit amet';
let list =
  ["Asteroids",
    "Comets",
    "Moon",
    "Planets",
    "Stars",
    "Sun"]
let header = 'I Am the Wrapper'
let image = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
let date = (new Date).toString()
let random = parseInt(Math.random() * 100)
let numbers = [`Todays date is`,
  <strong>&nbsp;{date}&nbsp;</strong>,
  `and`,
  <em>&nbsp;{random}&nbsp;</em>,
  `is a random number.`]

ReactDOM.render(
  <div>
    <Box
      boxClass='wrapper'
      header={header}
      paragraph={wrapperParagraph}
      />
  </div>,
  document.getElementById('app')
);
