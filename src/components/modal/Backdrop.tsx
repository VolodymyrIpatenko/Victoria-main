import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  children: ReactNode;
  // position?: 'top' | 'center' | 'bottom';
}

const BackdropComponent = ({ children }: BackdropProps) => {
  // const backdropClass = `backdrop ${position || 'center'}`;
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    document.getElementById('portal') as Element,
  );
};

export default BackdropComponent;
