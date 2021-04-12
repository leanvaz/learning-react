
import React from 'react';
import ReactDom from 'react-dom';
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'
//const element = <img src={user.avatar}/>//<div>{getGreeting(user)}</div> ;
const container = document.getElementById('root');

ReactDom.render(<Exercises />, container);
                