import React, { useState } from "react";

export default function Increment(props) {
//   const state = useState();
//   console.log(state);
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
    // console.log("Increment is Click ", count++);
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={IncNum}>
        {props.heading}
      </button>
    </>
  );
}
