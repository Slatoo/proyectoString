import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Component2() {
  const test = useSelector((state) => state.text.value);
  const [textBoolean, setTextBoolean] = useState();

  useEffect(() => {
    const textLength = test;
    if (textLength.length >= 5) {
      setTextBoolean(true);
    } else if (textLength.length !== 10) {
      setTextBoolean(false);
    }
  }, [test]);

  return <>{textBoolean && <p>mayor que 5!</p>}</>;
}
