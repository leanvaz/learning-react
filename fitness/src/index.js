
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
//const element = <img src={user.avatar}/>//<div>{getGreeting(user)}</div> ;
const container = document.getElementById('root');

ReactDom.render(<App />, container);