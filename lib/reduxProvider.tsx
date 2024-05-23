"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useLocalStorage } from "usehooks-ts";
import Image from "next/image";

interface MyContextProps {
  token: string;
  setToken: (value: string) => void;
  removeToken: () => void;
  image: string;
  setImage: (value: string) => void;
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
  const [image, setImage] = useLocalStorage("image", "");

  return (
    <Provider store={store}>
      <MyContext.Provider
        value={{ token, setToken, removeToken, image, setImage }}
      >
        {children}
      </MyContext.Provider>
    </Provider>
  );
};

export default ReduxProvider;
