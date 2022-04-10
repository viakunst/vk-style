import React from 'react';

export interface TitleProps {
  /**
   * Title contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Title({
  children,
}: TitleProps): React.ReactElement<TitleProps> {
  return (
    <h1>{children}</h1>
  );
}
