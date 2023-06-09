'use client';

import React from 'react';
import styles from '@/app/styles/components/common/button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
function Button({ className = '', onClick = () => {}, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
