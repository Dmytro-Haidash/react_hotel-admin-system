import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BurgerMenu.scss';
import { SwitchLanguageMenu } from '../SwitchLanguageMenu';

type Props = {
  onClose: () => void;
};

export const BurgerMenu: FC<Props> = ({ onClose }) => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <aside className="burger-menu">
      <div className="burger-menu__top">
        <div className="burger-menu__logo" onClick={handleLogoClick}></div>
        <div className="burger-menu__close" onClick={onClose}></div>
      </div>

      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <Link to="/" className="burger-menu__link" onClick={onClose}>{t("header.home")}</Link>
          </li>

          <li className="burger-menu__item">
            <Link to="/rooms" className="burger-menu__link" onClick={onClose}>{t("header.rooms")}</Link>
          </li>

          <li className="burger-menu__item">
            <Link to="/about-us" className="burger-menu__link" onClick={onClose}>{t("header.about-us")}</Link>
          </li>

          <li className="burger-menu__item">
            <Link to="/contacts" className="burger-menu__link" onClick={onClose}>{t("header.contacts")}</Link>
          </li>
        </ul>
      </div>

      <SwitchLanguageMenu />
    </aside>
  );
}
