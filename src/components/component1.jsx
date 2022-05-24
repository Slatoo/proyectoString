import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../actions";
import { useState } from "react";

export default function Component1() {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.text.value);
  const [inputText, setInputText] = useState("");
  

  return (
    <>
      <h1>{test}</h1>
      <input
        placeholder="insert a text"
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch(changeText(inputText));
        }}
      >
        press
      </button>
    </>
  );
}

