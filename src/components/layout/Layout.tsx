import React from 'react';
import PageFooter from '../footer/Footer';
import HeaderComponent from '../header/Header';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const SharedLayout: React.FC<Props> = ({ children }) => (
  <>
    <HeaderComponent />
    {children}
    <Outlet />
    <PageFooter />
  </>
);

export default SharedLayout;
