import { useNavigate } from 'react-router-dom';

export const setToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const removeToken = () => {
  localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
  return !!getToken();
};

// Higher-order component to protect routes
export const withAuthProtection = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    if (!isAuthenticated()) {
      navigate('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};