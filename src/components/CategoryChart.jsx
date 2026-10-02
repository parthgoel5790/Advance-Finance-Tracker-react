import React, { useMemo } from 'react';
import { useFinance } from '../context/financeContext';

export const CategoryChart = () => {
  const { transactions } = useFinance();

  const { categoryData, totalExpenseSum } = useMemo(() => {
    const expensesOnly = transactions.filter((t) => t.type === 'expense');
    const totalSum = expensesOnly.reduce((sum, t) => sum + t.amount, 0);

    const groups = {};
    expensesOnly.forEach((t) => {
      if (!groups[t.category]) {
        groups[t.category] = 0;
      }
      groups[t.category] += t.amount;
    });

    const data = Object.keys(groups).map((catName) => {
      const amount = groups[catName];
      const percentage = totalSum > 0 ? (amount / totalSum) * 100 : 0;
      return {
        name: catName,
        amount,
        percentage: Math.round(percentage),
      };
    });

    return { categoryData: data, totalExpenseSum: totalSum };
  }, [transactions]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Expense Allocations</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          Visual distribution across structural tags
        </p>
      </div>

      {totalExpenseSum === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400 text-sm">
          <span>📊</span>
          <p className="mt-2">No expenses logged yet</p>
        </div>
      ) : (
        <div className="space-y-4 mt-6">
          {categoryData.map((cat) => (
            <div key={cat.name} className="group">
              <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                <span>{cat.name}</span>
                <span className="text-gray-900">
                  \${cat.amount.toFixed(2)} ({cat.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${cat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
