import React, { useEffect, useState } from "react";
import "./notes.css";
// import Header from "../Header/Header";

function Notes(props) {
  const [notes, setNotes] = useState([]);

  const readnotes = async () => {
    fetch("/api/notes/").then((response) =>
      response
        .json()
        .then((data) => {
          let note = data;
          // setNotes("hai");
          // console.log(data);
          setNotes(note);
          // console.log(notes);
        })
        .catch(setNotes([{ title: "Error", tech: null, link: null }]))
    );
  };

  useEffect(() => {
    readnotes();
  }, []);

  return (
    <div className="notes">
      {/* <Header /> */}
      {/* <button onClick={readnotes}></button> */}
      {notes.map((nts) => {
        return (
          <div className="notes-container" key={nts.id}>
            <div className="noteH">
              <h3>{nts.title}</h3>
            </div>
            <div className="tech">Technology : {nts.tech}</div>
            <div>{nts.describ}</div>
            <div>
              <a href={nts.link}>{nts.link}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;
