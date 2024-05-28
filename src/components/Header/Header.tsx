import { useTranslation } from 'react-i18next';
import './Header.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { SwitchLanguageHeader } from '../SwitchLanguageHeader';
import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';

export const Header = () => {
  const [t] = useTranslation("global");
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navigate = useNavigate();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('header__nav-link', { 'is-active': isActive });

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <header className="header">
      <div className="header__left-side">
        <div className="header__logo" onClick={() => navigate('/')}></div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className={getLinkClass}>{t("header.home")}</NavLink>
            </li>
            
            <li className="header__nav-item">
              <NavLink to="/rooms" className={getLinkClass}>{t("header.rooms")}</NavLink>
            </li>
            
            <li className="header__nav-item">
              <NavLink to="/about-us" className={getLinkClass}>{t("header.about-us")}</NavLink>
            </li>
            
            <li className="header__nav-item">
              <NavLink to="/contacts" className={getLinkClass}>{t("header.contacts")}</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__right-side">
        <SwitchLanguageHeader />

        <NavLink to="/profile" className={getLinkClass} style={{ padding: 0 }}>
          <div className="header__profile"></div>
        </NavLink>

        <div className="header__menu" onClick={toggleMenu}></div>
      </div>

      {
        isMenuShown &&
        <div className='menu__container'>
          <BurgerMenu onClose={toggleMenu} />
        </div>
      }
    </header>
  );
};
