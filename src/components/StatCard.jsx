import React from 'react';

export const StatCard = ({ title, amount, type }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-2">
        /${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </h3>

      <div className="mt-4">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            type === 'income'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {type}
        </span>
      </div>
    </div>
  );
};
