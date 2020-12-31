import React, { useState } from "react";

// Importing all the required components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputNote from "./InputNote";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function App() {
  let [data, setData] = useState([
    {
      head: "Hello",
      body: "Write something for the day !!",
    },
  ]);

  function Cards(ele, index) {
    return (
      <div style={{ display: "inline-block", width: "25%" }}>
        <Note key={index} head={ele.head} body={ele.body} />
        <Zoom in={true}>
          <Fab
            style={{
              backgroundColor: "rgb(11, 12, 16)",
              borderColor: "rgb(11, 12, 16)",
              color: "whitesmoke",
              width: "15%",
              height: "30px",
              borderRadius: "100px",
              marginLeft: "-6%",
              bottom: "0",
              right: "0",
              position: "relative",
              cursor: "pointer",
            }}
            type="submit"
            onClick={() => {
              pointRemover(index);
            }}
          >
            <DeleteIcon />
          </Fab>
        </Zoom>
      </div>
    );
  }

  function dataCollector(newItem) {
    setData((previousVAlue) => {
      return [...previousVAlue, newItem];
    });
  }

  function pointRemover(id) {
    setData((previousVAlue) => {
      return previousVAlue.filter((ele, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="main-page">
      <Header />
      <InputNote dataSender={dataCollector} />
      <div className="main-section">{data.map(Cards)}</div>
      <Footer />
    </div>
  );
}

export default App;
