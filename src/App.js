import React from 'react';
import Row from './Row'
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
