import React from 'react';

export interface GridProps {
  /**
   * Grid contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Grid({
  children,
}: GridProps): React.ReactElement<GridProps> {
  return (
    <div>
      {children}
    </div>
  );
}
