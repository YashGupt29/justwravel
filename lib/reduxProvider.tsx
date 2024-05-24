"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useLocalStorage } from "usehooks-ts";
import Image from "next/image";

interface MyContextProps {
  token: string;
  setToken: (value: string) => void;
  removeToken: () => void;
  isLargeScreen: boolean;
  setIsLargeScreen: (value: boolean) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  return (
    <Provider store={store}>
      <MyContext.Provider
        value={{
          token,
          setToken,
          removeToken,
          isLargeScreen,
          setIsLargeScreen,
        }}
      >
        {children}
      </MyContext.Provider>
    </Provider>
  );
};

export default ReduxProvider;
