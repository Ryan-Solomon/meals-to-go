import * as firebase from 'firebase';
import React, {
  useState,
  createContext,
  FC,
  ReactNode,
  useContext,
} from 'react';

type TStatus = 'loading' | 'error' | 'idle';

type TAuthContext = {
  user: firebase.auth.UserCredential | null;
  status: TStatus;
  isAuthenticated: boolean;
  onLogin: (email: string, password: string) => void;
};

const initialContext: TAuthContext = {
  user: null,
  status: 'idle',
  isAuthenticated: false,
  onLogin: (email: string, password: string) => null,
};

const AuthContext = createContext(initialContext);

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<firebase.auth.UserCredential | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [status, setStatus] = useState<TStatus>('idle');

  async function onLogin(email: string, password: string) {
    setStatus('loading');
    try {
      const u = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(u);
      setIsAuthenticated(true);
      setStatus('idle');
    } catch (e) {
      console.log(e.message);
      setStatus('error');
    }
  }

  async function onRegister(
    email: string,
    password: string,
    confirmedPassword: string
  ) {
    setStatus('loading');
    if (password !== confirmedPassword) {
      throw new Error("Error: Passwords don't match");
    }
    try {
      const u = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setUser(u);
      setIsAuthenticated(true);
      setStatus('idle');
    } catch (e) {
      console.log(e.message);
      setStatus('error');
    }
  }

  const providedValues = { user, status, isAuthenticated, onLogin };
  return (
    <AuthContext.Provider value={providedValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
