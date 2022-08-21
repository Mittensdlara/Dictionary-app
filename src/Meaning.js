import React from "react";
import "./Meaning.css"


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
                          {definition.definition}
                          <br />
                          <br />
                          <em className="example">{definition.example}</em>
                      </div>
                  )

                })}
            </p>

        </div>
    )
}