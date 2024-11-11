import React, { useRef } from "react";

function UseRefComp() {
  const ref = useRef(null);

  const focusOnInputFunc = () => {
    ref.current.focus();
  };

  return (
    <>
   
      <input
        type="text"
        ref={ref}
        name={"userid"}
        placeholder="Enter your user id...!"
      />
      <br/>
      <br/>
      <br/>
      <button onClick={focusOnInputFunc}>focus on user id input</button>
    </>
  );
}

export default UseRefComp;
