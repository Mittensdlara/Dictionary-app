import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"

export default function Dictionary() {
let [keyword, setKeyword] = useState("")
let [results, setResult] = useState(null);



    function handleResponse(response) {
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResult(response.data[0]);
    }

    function search(event) {

      event.preventDefault();
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
      setKeyword(event.target.value);
  }
    
    return (
        <div>
           <form className="form" onSubmit={search}>
               <input type="search" placeholder="Enter a Word.." autoFocus={true} onChange={handleKeywordChange} />
               <input type="submit" value="Search" className="shadow" />
           </form>
           <Results results={results} />
        </div>
    )
}