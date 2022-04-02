import React from 'react';
import './Button.scss';

export interface ButtonProps {
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  onClick = () => 0,
  children,
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
