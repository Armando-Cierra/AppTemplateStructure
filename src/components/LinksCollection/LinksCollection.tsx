import React from 'react';
import {
  AppMenu,
  AppMenuItem,
  MenuDivider
} from '@2600hz/sds-react-components';
import { NavLink } from 'react-router-dom';

interface Props {
  collapsed: boolean;
  toggleMenu: () => void;
  collapseMenu: () => void;
}

const LinksCollection = ({ collapsed, toggleMenu, collapseMenu }: Props) => {
  return (
    <AppMenu
      collapsed={collapsed}
      appName="AppExample"
      appImage="https://res.cloudinary.com/dcldwtvku/image/upload/v1648403073/Sipster/Captura_de_Pantalla_2022-03-27_a_la_s_11.43.49_a._m._vlawgd.png"
      toggleMenu={toggleMenu}
      collapseMenu={collapseMenu}
    >
      <NavLink to={'/'}>
        <AppMenuItem icon="home" collapsed={collapsed}>
          Page 1
        </AppMenuItem>
      </NavLink>
      <NavLink to={'/page-2'}>
        <AppMenuItem icon="folder" collapsed={collapsed}>
          Page 2
        </AppMenuItem>
      </NavLink>
      <MenuDivider />
      <NavLink to={'/about'}>
        <AppMenuItem icon="folder" collapsed={collapsed}>
          About the App
        </AppMenuItem>
      </NavLink>
    </AppMenu>
  );
};

export default LinksCollection;
