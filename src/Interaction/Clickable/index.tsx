import React from 'react';

export interface ClickableProps {
  /**
   * Clickable contents
   */
  children: React.ReactNode;
  /**
   * Click handler
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Clickable({
  onClick = () => 0,
  children,
}: ClickableProps): React.ReactElement<ClickableProps> {
  return (
    <div onClick={onClick} aria-hidden="true">
      {children}
    </div>
  );
}
