import React from 'react';
// import { AppRegistry } from 'react-native';
import ReactDOM from 'react-dom';

import './index.css';

import App from "./components/app.js";
import Banner from './components/banner.js';
import Test from './components/test.js';
import Bananas from './components/bananas.js';
import Game from './components/game.js';
import Greeting from './components/greeting.js';
import Product from './components/product.js';

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<Test />, document.getElementById('test'));
ReactDOM.render(<Bananas />, document.getElementById('bananas'));
// AppRegistry.registerComponent('Bananas', () => Bananas);
ReactDOM.render(<Game />, document.getElementById("game"));
ReactDOM.render(<Greeting />, document.getElementById('greeting'));

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(<Product products={PRODUCTS} />, document.getElementById('product'));
