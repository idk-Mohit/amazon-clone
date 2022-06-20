import React, { useState, createContext } from "react";

const BackDropContext = createContext({
  backDrop: false,
  enableBackDrop: () => { },
  disableBackDrop: () => { },
});

export const BackDropContextProvider = (props) => {
  const [backDrop, setBackDrop] = useState(false);

  // BackDrop
  const enableBackDrop = () => {
    setBackDrop(true);
  };
  const disableBackDrop = () => {
    setBackDrop(false);
  };

  return (
    <BackDropContext.Provider
      value={{ backDrop, enableBackDrop, disableBackDrop }}
    >
      {props.children}
    </BackDropContext.Provider>
  );
};

export default BackDropContext;
