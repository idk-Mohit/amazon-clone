import { useState, createContext } from "react";

const BackDropContext = createContext({
  backDrop: false,
  activateBackdrop: () => {},
  deactiveBackdrop: () => {},
});

export const BackDropContextProvider = (props) => {
  const [backDrop, setBackDrop] = useState(false);

  const activateBackdrop = () => {
    setBackDrop(true);
  };
  const deactiveBackdrop = () => {
    setBackDrop(false);
  };

  return (
    <BackDropContext.Provider
      value={{ backDrop: backDrop, activateBackdrop, deactiveBackdrop }}
    >
      {props.children}
    </BackDropContext.Provider>
  );
};

export default BackDropContext;
