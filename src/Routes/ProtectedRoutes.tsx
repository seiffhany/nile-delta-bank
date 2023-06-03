import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

function ProtectedRoutes() {
  return (
    <NavMenu>
      <Outlet />
    </NavMenu>
  )
}

export default ProtectedRoutes