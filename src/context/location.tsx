import React, { FC, ReactNode, useContext, useState } from 'react';

type TContext = {
  location: string;
};

const initialContext: TContext = {
  location: 'San Francisco',
};

const LocationContext = React.createContext(initialContext);

const LocationContextProvider: FC<ReactNode> = ({ children }) => {
  const [location, setLocation] = useState('San Francisco');

  const value = { location };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
