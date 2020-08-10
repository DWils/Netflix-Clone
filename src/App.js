import React from 'react';
import './App.css';
import Row from './Components/Row'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import requests from './API/requests'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />

      <Row title="Nouveautés" fetchUrl={requests.fetchTrending}/>
      <Row title="Top 20" fetchUrl={requests.fetchTopRated}/>
      <Row title="Films d'Action" fetchUrl={requests.fetchTrending}/>
      <Row title="Comédie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Films d'Horreur" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedie Romatiques" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
