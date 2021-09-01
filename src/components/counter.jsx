import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleDecrement = (productId) => {
    console.log(productId);
    return count === 0 ? count : setCount(count - 1);
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  return (
    <>
      <span style={{ fontSize: "17px" }} className={getBadgeClasses()}>
        {formCount()}
      </span>
      <button
        style={{ fontSize: "15px" }}
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        style={{ fontSize: "15px" }}
        onClick={() => handleDecrement({ id: 2 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
