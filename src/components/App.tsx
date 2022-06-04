import {useState, useEffect} from "react";
import "./App.css";
import SearchResults from "./index";

//https://hn.algolia.com/api/v1/search?query=chave
function App() {
  const[hits,setHits] = useState([]);

  useEffect(()=>{
    const url = "https://hn.algolia.com/api/v1/search?query=";
    
    fetch(url)
    .then((response) => response.json())
    .then((hits) => setHits(hits));
  },[]);

  function handleInputChange(e:any){
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
        <form >
          <input type="text" placeholder="Informe a pesquisa..."  onChange={(event) => handleInputChange(event)}/>
        </form>
      </div>
      <SearchResults data = {hits}/>
    </div>
  );
};
export default App;
