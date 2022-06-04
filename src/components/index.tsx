function SearchResults({data}:any){
    const {hits} = data;
    return(
        <div>
            {
                hits?.map((item:any) => (
                    <div className="search-results" key={item.objectID}>
                        <ul>
                            <li className ="title">
                                <span>Titulo: {item.title?item.title:"Não possui titulo"} </span>
                            </li>
                            <li className="author">
                                <span>Autor: {item.author}</span>
                            </li>
                            <li className="url">
                                <span>Url: <a href={item.url} target="_blank">{item.url?"Saiba mais":"Não possui link"}</a></span>
                            </li>
                        </ul>             
                    </div>
                ))
            }
        </div>
    )
}
export default SearchResults;