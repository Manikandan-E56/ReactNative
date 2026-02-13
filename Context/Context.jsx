import { createContext, useState, useEffect, useContext } from 'react';
import { account, ID } from '../lib/appwrite';

export const AppContext = createContext(null); // ✅ Changed from undefined

export const AppContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [points, setPoints] = useState(100);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  async function login(email, password) {
    try {
      try {
        await account.deleteSessions();
      } catch (e) {
        // Ignore error if no session exists
      }
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function register(name, email, password, phone) {
    try {
      try {
        await account.deleteSessions();
      } catch (e) {
        // Ignore error if no session exists
      }

      await account.create(ID.unique(), email.trim(), password, name.trim());
      await account.createEmailPasswordSession(email.trim(), password);

      if (phone) {
        try {
          const formattedPhone = phone.trim().startsWith('+')
            ? phone.trim()
            : `+91 ${phone.trim()}`;
          await account.updatePhone(formattedPhone, password);
        } catch (error) {
          console.log('Phone update failed:', error);
        }
      }

      const user = await account.get();
      setUser(user);
      console.log('Registration success:', user);
      return user;
    } catch (error) {
      console.log('Registration failed:', error);
      return null;
    }
  }

  useEffect(() => {
    async function init() {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false); // ✅ Always set loading to false
      }
    }
    init();
  }, []);


  async function logout() {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  const value = { User, setUser, points, setPoints, login, register, logout, loading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
