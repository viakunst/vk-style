import React from 'react';
import Header from '../../Text/Header';
import Text from '../../Text/Text';

export interface ValueProps {
  /**
   * Value contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  description?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Value({
  children,
  description,
}: ValueProps): React.ReactElement<ValueProps> {
  return (
    <>
      <Header>
        {children}
      </Header>
      { description && (<Text>description</Text>)}
    </>
  );
}
