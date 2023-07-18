import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  children: ReactNode;
}

const BackdropComponent = ({ children }: BackdropProps) => {
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    document.getElementById('portal') as Element,
  );
};

export default BackdropComponent;
