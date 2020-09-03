import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import './index.css';


import {
  Header
} from './index';

const App = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;