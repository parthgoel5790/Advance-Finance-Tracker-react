import React, { useMemo } from 'react';
import { StatCard } from '../components/StatCard';
import { TransactionTable } from '../components/TransactionTable';
import { TransactionForm } from '../components/TransactionForm';
import { useFinance } from '../context/financeContext';
import { CategoryChart } from '../components/CategoryChart';

export const DashboardPage = () => {
  const { transactions } = useFinance();

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === 'income')
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactions]);

  const totalExpenses = useMemo(() => {
    return transactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactions]);

  const netBalance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 antialiased pb-12">
      <main className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Financial Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Real-time compilation of cashflow streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Income" amount={totalIncome} type="income" />
          <StatCard
            title="Total Expenses"
            amount={totalExpenses}
            type="expense"
          />
          <StatCard
            title="Net Balance"
            amount={netBalance}
            type={netBalance >= 0 ? 'income' : 'expense'}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <TransactionForm />
          </div>

          <div className="lg:col-span-2">
            <TransactionTable />
          </div>
        </div>
      </main>
    </div>
  );
};
