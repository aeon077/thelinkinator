import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import {
  Header,
  Results,
  Searchbar,
  URLform
} from './components/index';

//API
import {
  fetchUrls
} from './api'

const App = () => {

  console.log('Rendering App')
  // const [url, setUrl] = useState([]);
  // fetchUrls().then(console.log);
  // const addUrlCount = ({ id, name }) => {
  //   const nextUrl = [...url];
  //   const index = nextUrl.findIndex(url => url.id === id);

  //   if (index > -1) {
  //     nextUrl[index].count += 1;
  //   } else {
  //     nextUrl.push({
  //       id,
  //       name,
  //       count: 1
  //     });
  //   }
  //   setUrl(nextUrl);
  // }



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
      <Results
      // url={url}
      // addUrlCount={addUrlCount} 
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);