import React, { useState, useEffect } from "react";
import "./App.css";

const ApiUtility = {
  useData: function () {
    const [data, setData] = useState(0);
    function increaseOne() {
      setData(data + 1);
    }
    return { data, increaseOne };
  },
};

export function TestApp() {
  const { data, increaseOne } = ApiUtility.useData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={() => increaseOne()}>update state</button>
    </div>
  );
}
