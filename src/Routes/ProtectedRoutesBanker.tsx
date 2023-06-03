import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenuBanker from '../components/NavMenuBanker';

function ProtectedRoutesBanker() {
  return (
    <NavMenuBanker>
      <Outlet />
    </NavMenuBanker>
  )
}

export default ProtectedRoutesBanker