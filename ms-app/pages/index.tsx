import React from 'react';

interface IndexProps {
    user: any;
  }
   
  const Index = ({ user }: IndexProps) => {
    return <p>Hello {user.name}!</p>;
  };
   
  export default Index;