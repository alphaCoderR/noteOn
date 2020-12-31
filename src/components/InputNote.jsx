import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function InputNote(props) {
  let blockStyle = {
    width: "25%",
    margin: "2% auto",
  };

  let item = {};
  let [title, setHead] = useState("");
  let [paragraph, setBody] = useState("");
  let [displayTitle, setTitle] = useState(false);

  function headChange(event) {
    setHead(event.target.value);
  }
  function bodyChange(event) {
    setBody(event.target.value);
  }

  function visible() {
    setTitle(true);
  }

  function handleChange() {
    item.head = title;
    item.body = paragraph;
    setHead("");
    setBody("");
    props.dataSender(item);
  }

  return (
    <div style={blockStyle}>
      {displayTitle === true && (
        <Zoom in={displayTitle}>
          <input
            style={{
              display: "block",
              width: "80%",
              border: "4px solid transparent",
              borderTopColor: "#0b0c10",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "20px",
              padding: "4% 0.3%",
            }}
            onChange={headChange}
            type="text"
            value={title}
            placeholder="Title"
          ></input>
        </Zoom>
      )}

      <textarea
        style={{
          border: "4px solid transparent",
          borderBottomColor: "#0b0c10",
          width: "80%",
          textAlign: "center",
          backgroundColor: "#e8e8e8",
          fontSize: "20px",
        }}
        onChange={bodyChange}
        onClick={visible}
        type="text"
        rows={displayTitle ? 6 : 2}
        value={paragraph}
        placeholder="Take a note ..."
      ></textarea>
      <Zoom in={displayTitle}>
        <Fab
          style={{
            marginTop: "-10%",
            marginRight: "10%",
            fontSize: "40px",
            backgroundColor: "#0b0c10",
            borderColor: "#0b0c10",
            color: "whitesmoke",
            float: "right",
            cursor: "pointer",
          }}
          type="submit"
          onClick={handleChange}
        >
          <NoteAddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default InputNote;
