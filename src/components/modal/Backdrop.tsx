import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}>
      {children}
    </div>,
    document.getElementById('portal') as Element,
  );
};

export default Backdrop;
