import dashboard from '../../assets/icons/dashboard.svg';
import product from '../../assets/icons/product.svg';
import customers from '../../assets/icons/customers.svg';
import income from '../../assets/icons/income.svg';
import promote from '../../assets/icons/promote.svg';
import help from '../../assets/icons/help.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

import './navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__item">
          <img src={dashboard} alt="" className="navigation__img" />
          <p className="navigation__text">Dashboard</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
        <li className="navigation__item">
          <img src={product} alt="" className="navigation__img" />
          <p className="navigation__text">Product</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
        <li className="navigation__item navigation__item-active">
          <img src={customers} alt="" className="navigation__img" />
          <p className="navigation__text">Customers</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
        <li className="navigation__item">
          <img src={income} alt="" className="navigation__img" />
          <p className="navigation__text">Income</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
        <li className="navigation__item">
          <img src={promote} alt="" className="navigation__img" />
          <p className="navigation__text">Promote</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
        <li className="navigation__item">
          <img src={help} alt="" className="navigation__img" />
          <p className="navigation__text">Help</p>
          <img src={arrowRight} alt="" className="navigation__icon" />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;