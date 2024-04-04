import search from '../../assets/icons/search.svg'

import './table.scss';

const Table = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__block">
          <h2 className="header__title">All Customers</h2>
          <p className="header__text">Active Members</p>
        </div>
        <div className="search">
          <img src={search} alt="" className="search__img" />
          <input type="text" className="search__input" placeholder='Search' />
        </div>
      </div>
      <div className="table">
        <div className="table__header">
          <div className="table__header-cell">Customer Name</div>
          <div className="table__header-cell">Company</div>
          <div className="table__header-cell">Phone Number</div>
          <div className="table__header-cell">Email</div>
          <div className="table__header-cell">Country</div>
          <div className="table__header-cell">Status</div>
        </div>
        <div className="table__body">
          <div className="table__row">
            <div className="table__body-cell">Jane Cooper</div>
            <div className="table__body-cell">Microsoft</div>
            <div className="table__body-cell">(225) 555-0118</div>
            <div className="table__body-cell">jane@microsoft.com</div>
            <div className="table__body-cell">United States</div>
            <div className="table__body-cell table__body-cell_active">Active</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Floyd Miles</div>
            <div className="table__body-cell">Yahoo</div>
            <div className="table__body-cell">(205) 555-0100</div>
            <div className="table__body-cell">floyd@yahoo.com</div>
            <div className="table__body-cell">Kirbati</div>
            <div className="table__body-cell table__body-cell_inactive">Inactive</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Ronald Richards</div>
            <div className="table__body-cell">Adobe</div>
            <div className="table__body-cell">(302) 555-0107</div>
            <div className="table__body-cell">ronald@adobe.com</div>
            <div className="table__body-cell">Israel</div>
            <div className="table__body-cell table__body-cell_inactive">Inactive</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Marvin McKinney</div>
            <div className="table__body-cell">Tesla</div>
            <div className="table__body-cell">(252) 555-0126</div>
            <div className="table__body-cell">marvin@tesla.com</div>
            <div className="table__body-cell">Iran</div>
            <div className="table__body-cell table__body-cell_active">Active</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Jerome Bell</div>
            <div className="table__body-cell">Google</div>
            <div className="table__body-cell">(629) 555-0129</div>
            <div className="table__body-cell">jerome@google.com</div>
            <div className="table__body-cell">Réunion</div>
            <div className="table__body-cell table__body-cell_active">Active</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Kathryn Murphy</div>
            <div className="table__body-cell">Microsoft</div>
            <div className="table__body-cell">(406) 555-0120</div>
            <div className="table__body-cell">kathryn@microsoft.com</div>
            <div className="table__body-cell">Curaçao</div>
            <div className="table__body-cell table__body-cell_active">Active</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Jacob Jones</div>
            <div className="table__body-cell">Yahoo</div>
            <div className="table__body-cell">(208) 555-0112</div>
            <div className="table__body-cell">jacob@Yahoo.com</div>
            <div className="table__body-cell">Brazil</div>
            <div className="table__body-cell table__body-cell_active">Active</div>
          </div>
          <div className="table__row">
            <div className="table__body-cell">Kristin Watson</div>
            <div className="table__body-cell">Facebook</div>
            <div className="table__body-cell">(704) 555-0127</div>
            <div className="table__body-cell">kristin@facebook.com</div>
            <div className="table__body-cell">Åland Islands</div>
            <div className="table__body-cell table__body-cell_inactive">Inactive</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer__text">Showing data 1 to 8 of 256K entries</p>
        <div className="pagination">
          <div className="pagination__item"></div>
          <div className="pagination__item pagination__item_active">1</div>
          <div className="pagination__item">2</div>
          <div className="pagination__item">3</div>
          <div className="pagination__item">4</div>
          <span>...</span>
          <div className="pagination__item">40</div>
          <div className="pagination__item"></div>
        </div>
      </div>
    </div>
  )
}

export default Table;