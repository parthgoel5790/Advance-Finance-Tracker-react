import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 antialiased pb-12">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-xl">💼</span>
              <span className="font-bold text-lg text-gray-900 tracking-tight">
                FinTrace Studio
              </span>
            </div>

            <div className="flex space-x-4 text-sm font-medium">
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-2 py-1"
              >
                Dashboard
              </Link>
              <Link
                to="/analytics"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-2 py-1"
              >
                Analytics
              </Link>
            </div>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full">
            React Router Engine Active
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/analytics',
        element: <AnalyticsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
