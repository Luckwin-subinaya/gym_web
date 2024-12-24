import React, { useState } from 'react';
import LandingPage from './LandingPage';
import AdminDashboard from './AdminDashboard';

const App = () => {
  const [isAdminPage, setIsAdminPage] = useState(false);

  const navigateToAdmin = () => setIsAdminPage(true);
  const navigateToLanding = () => setIsAdminPage(false);

  return (
    <div>
      {isAdminPage ? (
        <AdminDashboard 
          adminEmail="dynamic-admin@gmail.com" 
          navigateToLanding={navigateToLanding} 
        />
      ) : (
        <LandingPage 
          navigateToAdmin={navigateToAdmin} 
        />
      )}
    </div>
  );
};

export default App;
