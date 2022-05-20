import React from "react";
import "./App.css";
import Component1 from "./components/component1";
import Component2 from "./components/component2";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Component1 />
        <Component2 />
      </section>
    </div>
  );
}
