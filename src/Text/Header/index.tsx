import React from 'react';

export interface HeaderProps {
  /**
   * Header contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Header({
  children,
}: HeaderProps): React.ReactElement<HeaderProps> {
  return (
    <h2>{children}</h2>
  );
}
