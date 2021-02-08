import * as firebase from 'firebase';
import React, { useState, createContext, FC, ReactNode } from 'react';

const loginRequest = (email: string, password: string) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

const AuthContext = createContext({});

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<firebase.auth.UserCredential>();
  const [status, setStatus] = useState<'loading' | 'error' | 'idle'>('idle');

  async function onLogin(email: string, password: string) {
    setStatus('loading');
    try {
      const u = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(u);
      setStatus('idle');
    } catch (e) {
      console.log(e.message);
      setStatus('error');
    }
  }

  const providedValues = {};
  return (
    <AuthContext.Provider value={providedValues}>
      {children}
    </AuthContext.Provider>
  );
};
