import React, { FC, ReactNode, useContext, useState } from 'react';

type TContext = {
  location: string;
  setLocation: (l: string) => void;
};

const initialContext: TContext = {
  location: 'San Francisco',
  setLocation: (l: string) => null,
};

const LocationContext = React.createContext(initialContext);

export const LocationContextProvider: FC<ReactNode> = ({ children }) => {
  const [location, setLocation] = useState('San Francisco');

  const value = { location, setLocation };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
