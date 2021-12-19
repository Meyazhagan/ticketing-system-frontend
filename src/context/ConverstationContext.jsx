import React, { createContext, useContext } from "react";

const ConverstationContext = createContext();

function ConverstationProvider({ children }) {
    return <ConverstationContext.Provider value={{}}>{children}</ConverstationContext.Provider>;
}

function useConverstationContext() {
    return useContext(ConverstationContext);
}

export default useConverstationContext;
export { ConverstationProvider };
