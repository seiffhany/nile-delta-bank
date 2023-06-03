import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenuAdmin from '../components/NavMenuAdmin';

function ProtectedRoutesAdmin() {
  return (
    <NavMenuAdmin>
      <Outlet />
    </NavMenuAdmin>
  )
}

export default ProtectedRoutesAdmin