import React, { useState, useEffect } from "react";
import axios from "axios";
//Why does this need {} to import?
import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  //(Does that mean I need to change to a class for ComponentDidMount, or can I just use useEffect? I think I can use)
  // set that data to the colorList state property

  useEffect(() => {
    // console.log("Mounted");

    axiosWithAuth()
    .get("/colors")
    .then((res) => {
      // console.log(res);
      setColorList(res.data);
    })

  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
