import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page1, Page2, About } from '../../pages';

interface Props {
  collapsed: boolean;
}

const RoutesCollection = ({ collapsed }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Page1 collapsed={collapsed} />} />
      <Route path="/page-2" element={<Page2 collapsed={collapsed} />} />
      <Route path="/about" element={<About collapsed={collapsed} />} />
    </Routes>
  );
};

export default RoutesCollection;
