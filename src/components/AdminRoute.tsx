import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, isAdmin } from '../config/firebaseConfig';

const AdminRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const [user, loading, error] = useAuthState(auth);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const result = await isAdmin(user);
        setIsAdminUser(result);
      }
    };
    checkAdmin();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !user || !isAdminUser) {
    return <Navigate to="/login" />;
  }

  return <>{element}</>;
};

export default AdminRoute;
