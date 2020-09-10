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

async function test() {
  await fetchLinks().then(console.log);
}
test();

const App = () => {

  console.log('Rendering App')

  const [linksList, setLinksList] = useState([]);

  useEffect(() => {
    fetchLinks()
      .then(links => {
        setLinksList(links);
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
      <Header linksList={linksList} />
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