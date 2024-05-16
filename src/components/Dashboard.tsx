import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <div>Please log in to access your dashboard.</div>;
  }

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, {user}!</p>
      {/* Add functionality to manage saved templates and customizations */}
    </div>
  );
};

export default Dashboard;
