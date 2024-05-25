import { useEffect, useState } from 'react';
import { auth } from './Firebase/firebase';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser };
};

export default useAuth;
