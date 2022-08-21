import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>
              {props.meaning.partOfSpeech}
            </h3>
            <p>
                {props.meaning.definitions.map(function (definition, index) {
                  return (
                      <div key={index}>
                            <br />
                            <br />
                         <strong>Definition: </strong> {definition.definition}
                         <br />
                        
                          <strong>Example: </strong>
                          <em className="example">{definition.example}</em>
                          <Synonyms synonyms={definition.synonym} />
                      </div>
                  )

                })}
            </p>

        </div>
    )
}