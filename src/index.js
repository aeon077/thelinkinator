import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss'


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
  // const [results, setResults] = useState([]);
  const [linksList, setLinksList] = useState([]);
  const [clicks, setClicks] = useState(0)

  const addClicks = () => {
    setClicks(nextClicks => nextClicks + 1)
  }

  useEffect(() => {
    fetchLinks()
      .then(result => {
        setLinksList(result.links);
        console.log("links result", result.links)
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  // const addCount = ({ id, url }) => {
  //   const nextLinksList = [...linksList]; // make a duplicate first
  //   const index = nextLinksList.findIndex(linksList => linksList.id === id);
  //   if (index > -1) {
  //     nextLinksList[index].clicks += 1;
  //   } else {
  //     nextLinksList.push({
  //       id,
  //       url,
  //       clicks: 1
  //     });
  //   }

  //   setLinksList(nextLinksList);
  // }


  return (
    <div className="App">
      <Header />
      <Searchbar
        setLinksList={setLinksList} />
      <URLform
        setLinksList={setLinksList}
      />
      <Results
        clicks={clicks}
        addClicks={addClicks}
        linksList={linksList}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);