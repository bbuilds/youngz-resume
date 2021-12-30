import * as React from "react";

const AppContext = React.createContext(["false", () => {}, () => {}]);

export function AppWrapper({ children }) {
  const [mobileMenuState, setmobileMenuState] = React.useState(false);

  const toggleMenuState = () => {
    setmobileMenuState(!mobileMenuState);
  };

  const falseMenuState = () => {
    setmobileMenuState(false);
  };

  let sharedState = {
    mobileMenuState,
    toggleMenuState,
    falseMenuState,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext(AppContext);
}
