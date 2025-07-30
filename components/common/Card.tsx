// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces'; // This import will work once interfaces/index.ts is created

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;