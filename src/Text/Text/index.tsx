import React from 'react';

export interface TextProps {
  /**
   * Text contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Text({
  children,
}: TextProps): React.ReactElement<TextProps> {
  return (
    <p>{children}</p>
  );
}
