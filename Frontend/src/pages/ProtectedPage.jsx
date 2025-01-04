import React from 'react';
import { withAuthProtection } from '../utils/auth';

const ProtectedPage = () => {
  return <h1>Welcome to the protected page!</h1>;
};

export default withAuthProtection(ProtectedPage);