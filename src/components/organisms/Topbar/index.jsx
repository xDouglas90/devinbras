import { useEffect, useState } from 'react';

import { Button } from '../../atoms';
import { Navigation } from '../../molecules';

import { CompanyName, Header, Menu } from './styles';

export const Topbar = () => {
  const [isOpen, toggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      const matchMedia = window.matchMedia('(max-width: 768px)');

      setIsMobile(matchMedia.matches);
      toggleMenu(false);
    };

    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const handleClickMenu = () => toggleMenu((prev) => !prev);

  return (
    <Header>
      <CompanyName>DevInBras</CompanyName>
      {isMobile ? (
        <Menu toggle={isOpen}>
          <Navigation />
        </Menu>
      ) : (
        <Navigation />
      )}
      <Button type="button" styleType="secondary">
        Sair
      </Button>

      {isMobile && <MenuHamburger onClick={handleClickMenu} />}
    </Header>
  );
};
