import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const STORAGE_KEY = 'vato_calculator_unlocked';

interface CalculatorLockContextType {
  isUnlocked: boolean;
  unlock: (password: string) => boolean;
  lock: () => void;
}

const CalculatorLockContext = createContext<CalculatorLockContextType | undefined>(undefined);

export const CalculatorLockProvider = ({ children }: { children: ReactNode }) => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isUnlocked.toString());
  }, [isUnlocked]);

  const unlock = (password: string): boolean => {
    if (password === 'vato1952') {  // ← тук сменете паролата, ако искате
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const lock = () => setIsUnlocked(false);

  return (
    <CalculatorLockContext.Provider value={{ isUnlocked, unlock, lock }}>
      {children}
    </CalculatorLockContext.Provider>
  );
};

export const useCalculatorLock = () => {
  const context = useContext(CalculatorLockContext);
  if (!context) {
    throw new Error('useCalculatorLock must be used within CalculatorLockProvider');
  }
  return context;
};