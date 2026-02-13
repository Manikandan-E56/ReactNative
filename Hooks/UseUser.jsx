import { AppContext } from '../Context/Context';
import { useContext } from 'react';

export default function UseUser() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('UseUser must be used within a AppContextProvider');
  }
  return context;
}
