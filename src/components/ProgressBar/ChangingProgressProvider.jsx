import React, { useEffect, useState } from "react";

const ChangingProgressProvider = ({values, interval=1000, children}) => {
  
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
        setValuesIndex((valuesIndex+1) % values.length);
    })
  }, [values.length, setInterval])
  

  return children(values[valuesIndex]);
  
}

export default ChangingProgressProvider;
