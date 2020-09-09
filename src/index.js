import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  Header,
  Results,
  Searchbar,
  URLform
} from './components/index';

const App = () => {
  console.log('Rendering App')
  const [results, setResults] = useState([]);
  const [deck, setDeck] = useState([]);

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
      <Results />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);