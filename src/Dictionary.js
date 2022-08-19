import React from "react";
import "./Dictionary.css"

export default function Dictionary() {

  function search(event) {
      event.preventDefault();
      
  }
    
    return (
        <div>
           <form className="form" onSubmit={search}>
               <input type="search" placeholder="Enter a Word.." autoFocus={true} />
               <input type="submit" value="Search" className="shadow" />
           </form>
        </div>
    )
}