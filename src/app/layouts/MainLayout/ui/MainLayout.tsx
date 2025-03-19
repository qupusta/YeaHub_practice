import { Header } from '@/widgets/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <>
      <h2>Main Layout</h2>
      <Header />
      <Outlet />
    </>
  );
};
