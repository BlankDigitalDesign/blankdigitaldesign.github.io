import React, { useState, useEffect } from "react";

const Ant = () => {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((position) => position + 10);
      setCount(count + 1);
    }, 100);
    // setCount(count + 1);
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="ant" style={{ left: position }}>
      🐜
    </div>
  );
};

export default Ant;
