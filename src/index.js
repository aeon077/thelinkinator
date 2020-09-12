import React, { useState, useEffect } from 'react';
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
  fetchLinks
} from './api/index';

const App = () => {

  console.log('Rendering App')

  const [linksList, setLinksList] = useState([]);

  useEffect(() => {
    fetchLinks()
      .then(result => {
        setLinksList(result.links);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);


  // const [url, setUrl] = useState([]);
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

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <URLform
        setLinksList={setLinksList}
      />
      <Results
        linksList={linksList}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);