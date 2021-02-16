import React, { useState } from 'react';
import LoginForm from '../components/login.form';

const Component: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: any): void => {
    setLoading(!loading);
    console.log('Success:', values);
  };

  return <LoginForm />;
};

export default Component;
