import {useState} from "react";
import "./App.css";
import SearchResults from "./SearchResults/";

//https://hn.algolia.com/api/v1/search?query=chave
function App() {

  const[hits,setHits] = useState([]);

  const handleInputChange = (e:any) =>{
    const {value} = e.target;

    const url = `https://hn.algolia.com/api/v1/search?query=${value}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((hits) => setHits(hits));
  };

  return(
    <div className="App">
      <h1>Biblioteca</h1>
      <div className="separator">
        <form>
          <input type="text" id="search" placeholder="Informe a pesquisa..." onChange={handleInputChange}/>
        </form>
      </div>
      <SearchResults data = {hits}/>
    </div>
  );
};
export default App;
