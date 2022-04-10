import React from 'react';

export interface NoteProps {
  /**
   * Note contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Note({
  children,
}: NoteProps): React.ReactElement<NoteProps> {
  return (
    <span>{children}</span>
  );
}
