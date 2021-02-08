import * as firebase from 'firebase';
import React, { useState, createContext, FC, ReactNode } from 'react';

const loginRequest = (email: string, password: string) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

const AuthContext = createContext({});

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState<'loading' | 'error' | 'idle'>('loading');

  const providedValues = {};
  return (
    <AuthContext.Provider value={providedValues}>
      {children}
    </AuthContext.Provider>
  );
};
