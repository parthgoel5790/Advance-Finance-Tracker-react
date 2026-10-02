import React from 'react';
import { CategoryChart } from '../components/CategoryChart';

export const AnalyticsPage = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Advanced Breakdown</h1>
        <p className="text-sm text-gray-500 mt-1">
          Deep analysis of your categorical funding distribution profiles.
        </p>
      </div>
      <div className="h-[400px]">
        <CategoryChart />
      </div>
    </div>
  );
};
