import React from 'react';
import { useFinance } from '../context/financeContext';

export const TransactionTable = () => {
  // Hook function ke andar aa gaya
  const { transactions, deleteTransaction } = useFinance();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 font-medium border-b border-gray-100">
              <th className="py-3 px-2">Description</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">Date</th>
              <th className="py-3 px-2 text-right">Amount</th>
              <th className="py-3 px-2 text-center w-12">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((tx) => {
              const isIncome = tx.type === 'income';
              return (
                <tr key={tx.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 px-2 font-medium text-gray-900">{tx.description}</td>
                  <td className="py-3.5 px-2 text-gray-500">{tx.category}</td>
                  <td className="py-3.5 px-2 text-gray-400">{tx.date}</td>
                  <td className={`py-3.5 px-2 text-right font-semibold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                    {isIncome ? '+' : '-'}\${tx.amount.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <button onClick={() => deleteTransaction(tx.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors font-medium text-xs">
                      🗑️
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
