import * as React from "react";
import { useState } from "react";
import "./styles.css";
import { createStyles, makeStyles } from "@material-ui/core";

const width = window.innerWidth;
const height = window.innerHeight;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    },
    rootDimentions: {
      backgroundColor: "blue",
      minHeight: `${height}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    }
  })
);

const App = () => {
  const classes = useStyles();
  const [isDimenstions, setIsDimentions] = useState(true);

  const getWindowDimentions = () => {
    //alert(`width：${width}\nheight：${height}`);
    if (isDimenstions) setIsDimentions(false);
    else setIsDimentions(true);
  };

  return (
    <div className={isDimenstions ? classes.root : classes.rootDimentions}>
      <h1>CodeSandbox</h1>
      <button
        onClick={() => {
          getWindowDimentions();
        }}
      >
        Excluding Address Bar
      </button>
    </div>
  );
};
export default App;
