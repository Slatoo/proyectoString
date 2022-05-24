import React from "react";
import "./App.css";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import { useSelector } from "react-redux";

export default function App() {
  const test = useSelector((state) => state.text.value);
  return (
    <div className="App">
      <section className="App-content">
        <Component1 />
        <Component2 textTest={test}/>
      </section>
    </div>
  );
}
