const SearchResults =({data}) => {
  const {hits} = data

  

  return(
    <div>
      {
        hits?.map((item) =>{
          return(
            <div className="search-results">
              <ul key={item.objectID}>
                <li className ="livro">
                  <span>Titulo: {item.title?item.title:"Não possui titulo"} </span>
                </li>
                <li className="autor">
                  <span>Autor: {item.author}</span>
                </li>
                <li className="url">
                  <span>Url: <a href={item.url} target="_blank">{item.url?"Saiba mais":"Não possui link"}</a></span>
                </li>
              </ul>             
            </div>
          )
        })
      }
    </div>
    
  )
}
    
export default SearchResults;