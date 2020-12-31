import React from "react";

function Note(props) {
  return (
    <section className="note">
      <div className="note-head">
        <h2>{props.head}</h2>
      </div>
      <div className="note-body">
        <p>{props.body}</p>
      </div>
    </section>
  );
}

export default Note;
