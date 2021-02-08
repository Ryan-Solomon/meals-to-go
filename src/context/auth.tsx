import * as firebase from 'firebase';
import React, {
  useState,
  createContext,
  FC,
  ReactNode,
  useContext,
} from 'react';

const loginRequest = (email: string, password: string) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

type TStatus = 'loading' | 'error' | 'idle';

type TAuthContext = {
  user: firebase.auth.UserCredential | null;
  status: TStatus;
  isAuthenticated: boolean;
};

const initialContext: TAuthContext = {
  user: null,
  status: 'idle',
  isAuthenticated: false,
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

  const providedValues = { user, status, isAuthenticated };
  return (
    <AuthContext.Provider value={providedValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
