import React, { useState } from 'react';
import { useFinance } from '../context/financeContext';

export const TransactionForm = () => {
  // Hook ko hamesha component ke andar likhein
  const { addTransaction } = useFinance();

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;
    
    const newTx = {
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    };
    addTransaction(newTx);

    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Add Transaction</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Rent, salary, groceries..." className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase">Amount ($)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase">Transaction Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none text-sm font-medium">
            <option value="expense">📉 Expense</option>
            <option value="income">📈 Income</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mt-1 p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none text-sm font-medium">
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Housing">Housing</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-indigo-700 transition-colors mt-2">
          Add Record
        </button>
      </div>
    </form>
  );
};
