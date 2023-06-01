import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Nav/>

      </header>

      <Banner/>

      <Row 
      title="Horrer Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
      title="Trending In India"
      fetchUrl={requests.fetchTrending}
      isLargeRow={true}
      />
      <Row 
      title="Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
      <Row 
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}
      />
      <Row 
      title="Populer Comedies"
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
      title="NetFlix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
      title="Romance"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
      title="Documentry"
      fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  );
}

export default App;
