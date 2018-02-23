import React from 'react';
// import { AppRegistry } from 'react-native';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';

import Header from "./components/Header.js";
import Banner from './components/Banner.js';
import Test from './components/Test.js';
import Bananas from './components/Bananas.js';
import Game from './components/Game.js';
import Greeting from './components/Greeting.js';
import Product from './components/Product.js';

import Counter from './components/Counter';
import counter from './reducers';

ReactDOM.render(<Header />, document.getElementById('header'));
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

const store = createStore(counter);
const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
    />,
    document.getElementById('counter')
)
render();
store.subscribe(render);
