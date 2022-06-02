import {useState} from 'react';
import './App.css';
import SearchResults from './SearchResults/index';

//https://hn.algolia.com/api/v1/search?query=chave
function App() {

  const[hits,setHits] = useState([]);

  const handleInputChange = (e:any) =>{
    e.preventDefault();
    const {value} = e.target;

    const url = `https://hn.algolia.com/api/v1/search?query=${value}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((hits) => setHits(hits));
  };

  console.log('handle: ',hits)

  return (
    <div className="App">
      <h1>Biblioteca</h1>
      <div className="separador">
        <form>
          <input type="search" id="search" className="inp" onChange={handleInputChange} />
        </form>
      </div>
      
      <SearchResults data = {hits}/>
      

    </div>
  );
};

export default App;
