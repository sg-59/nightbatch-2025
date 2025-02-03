import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

export const Appcontext = createContext();

export const Storepage = ({ children }) => {
  const InitialValue = {
    userData: JSON.parse(localStorage.getItem("gopika_storage")) || null,
  };

  function display(state, action) {
    console.log("action values ..................", action);

    switch (action.status) {
      case "success":
        return { userData: action.apidata };

      case "remove":
        return { userData: null };
    }
  }

  const [state, dispatch] = useReducer(display, InitialValue);

  console.log("final answer", state.userData);

  useEffect(() => {
    localStorage.setItem("gopika_storage", JSON.stringify(state.userData));
  }, [state.userData]);

  return (
    <>
      <Appcontext.Provider value={{ dispatch, user: state.userData }}>
        {children}
      </Appcontext.Provider>
    </>
  );
};
