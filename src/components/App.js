import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

import {
  Header, Searchbar
} from './index';
import URLform from './URLform';

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
      <Searchbar />
      <URLform />
    </div>
  );
}

export default App;