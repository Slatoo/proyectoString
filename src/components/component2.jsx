import React, { useEffect, useState } from "react";

export default function Component2(props) {
  const textString = props.textTest;
  const [textBoolean, setTextBoolean] = useState(false);

  useEffect(() => {
    if (textString.length >= 5) {
      setTextBoolean(true);
    } else if (textString.length < 5) {
      setTextBoolean(false);
    }
  }, [textString]);

  return <>{textBoolean && <p>mayor o igual a 5</p>}</>;
}
