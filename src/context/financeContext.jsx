import { createContext, useState, useEffect, useContext } from 'react';
import { mockTransactions } from '../mock/mockData';
const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('fin_transactions');
    return saved ? JSON.parse(saved) : mockTransactions;
  });

  useEffect(() => {
    localStorage.setItem('fin_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
export const useFinance = () => {
  return useContext(FinanceContext);
};
