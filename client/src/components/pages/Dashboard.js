import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <h1>spinner...</h1>;
  }

  return (
    <div>
      <h1>
        {user.name} {user.lastName}
      </h1>
      <h5>{user.email} </h5>
    </div>
  );
};

export default Dashboard;
