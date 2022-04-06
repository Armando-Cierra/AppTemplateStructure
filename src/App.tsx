import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesCollection, LinksCollection } from './components';

function App() {
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  const [desktopCollapsedMenuHistory, setDesktopCollapsedMenuHistory] =
    useState(false);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (screenSize.dynamicWidth <= 1023) {
      setCollapsedMenu(true);
    } else {
      if (desktopCollapsedMenuHistory !== collapsedMenu) {
        setCollapsedMenu(desktopCollapsedMenuHistory);
      }
    }
  }, [screenSize.dynamicWidth]);

  useEffect(() => {
    if (screenSize.dynamicWidth > 1023) {
      setDesktopCollapsedMenuHistory(collapsedMenu);
    }
  }, [collapsedMenu]);

  const toggleMenu = () => {
    setCollapsedMenu((prevState) => !prevState);
  };

  const collapseMenu = () => {
    setCollapsedMenu(true);
  };

  return (
    <Router>
      <div className="Container">
        <LinksCollection
          collapsed={collapsedMenu}
          toggleMenu={toggleMenu}
          collapseMenu={collapseMenu}
        />
        <RoutesCollection collapsed={collapsedMenu} />
      </div>
    </Router>
  );
}

export default App;
