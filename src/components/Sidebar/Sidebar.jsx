import Navigation from '../Navigation/Navigation';

import logo from '../../assets/images/logo.svg'
import man from '../../assets/images/sidebar-footer-img.svg';
import hamburger from '../../assets/icons/hamburger.png';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__block">
        <img src={logo} alt="" className="sidebar__img" />
        <Navigation/>
      </div>
      <div className="sidebar-footer">
        <img src={man} alt="" className="sidebar-footer__img" />
        <div className="vertical-block">
          <p className="sidebar-footer__title">Evano</p>
          <p className="sidebar-footer__description">Project Manager</p>
        </div>
      </div>
      <img width={24} height={24} src={hamburger} alt="" className="menu" />
    </aside>
  )
}

export default Sidebar;