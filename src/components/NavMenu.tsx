import React from 'react';
import { useEffect, useRef, useState, ReactElement } from 'react';
import '../css/nav-menu.css';
import { useNavigate } from 'react-router-dom';
import * as Routes from '../Routes/paths';
import { Tabs, notification } from 'antd';
import type { TabsProps } from 'antd';
import '../data/client-tabs';
import { credit_cards, loans, my_accounts, notifications, reports, settings, pay_bills_tabs } from '../data/client-tabs';
import DeltaTabItem from './DeltaTabItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { logoutAction } from '../redux/actions/logoutAction';
// import { use } from 'express/lib/router';

function NavMenu({ children }: { children: any }) {
  const dispatch: any = useDispatch();

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const getPageTitle = (path: string) => {
    switch (path) {
      case Routes.CLIENT_MY_ACCOUNTS:
        return "My Accounts";
      case Routes.CLIENT_CREDIT_CARDS:
        return "Credit Score: 693";
      case Routes.CLIENT_LOANS:
        return "Loans";
      case Routes.CLIENT_PAY_BILLS:
        return "Pay Bills";
      case Routes.CLIENT_REPORT:
        return "Report an issue";
      case Routes.CLIENT_SETTINGS:
        return "Settings";
      default:
        return "Notifications";
    }
  }

  const getIndex = (path: string) => {
    switch (path) {
      case Routes.CLIENT_MY_ACCOUNTS:
        return 0;
      case Routes.CLIENT_CREDIT_CARDS:
        return 1;
      case Routes.CLIENT_LOANS:
        return 2;
      case Routes.CLIENT_PAY_BILLS:
        return 3;
      case Routes.CLIENT_REPORT:
        return 4;
      case Routes.CLIENT_SETTINGS:
        return 6;
      default:
        return 5;
    }
  }

  const getTabItems = (path: string) => {
    switch (path) {
      case Routes.CLIENT_MY_ACCOUNTS:
        return my_accounts;
      case Routes.CLIENT_CREDIT_CARDS:
        return credit_cards;
      case Routes.CLIENT_REPORT:
        return reports;
      case Routes.CLIENT_SETTINGS:
        return settings;
      case Routes.CLIENT_PAY_BILLS:
        return pay_bills_tabs;
      default:
        return loans;
      // case Routes.CLIENT_LOANS:
      //   return 2;
      // case Routes.CLIENT_REPORT:
      //   return 4;
      // case Routes.CLIENT_SETTINGS:
      //   return 6;
      // default:
      //   return 5;
    }
  }

  const [activePage, setActivePage] = useState(getIndex(window.location.pathname));
  const [pageTitle, setPageTitle] = useState(getPageTitle(window.location.pathname));
  const [tabItems, setTabItems] = useState(getTabItems(window.location.pathname));
  const [currentSelect, setCurrentSelect] = useState(1);
  const navigate = useNavigate();

  const handlePageClick = (index: number, route: string, newTitle: string, tabItems: any[]) => {
    if (route !== window.location.pathname) {
      setActivePage(index);
      setPageTitle(newTitle);
      setTabItems(tabItems);
      setCurrentSelect(1);
      navigate(route);
    }
  }

  const handleTabClick = (index: number) => {
    setCurrentSelect(index);
    console.log("clicking: " + index);
  }

  return (
    <div className="main_page">
      <div className="nav_menu">
        <div className="nav_menu_header">
          <img src="/res/banner-white.svg" alt="banner" />
        </div>

        <div className="profile-box">
          <div className="profile-image">
            <img src="/res/youssef-hany.svg" alt="" />
            <div className="profile_element">
              <h1>{!user.first_name ? "User X" : user.first_name +  user.last_name}</h1>
              <div className="edit-button">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nav_menu_links">
          <ul>
            <li className={`list-item ${activePage === 0 ? "selected_item" : ""}`} onClick={() => handlePageClick(0, Routes.CLIENT_MY_ACCOUNTS, "My Accounts", my_accounts)}>
              <img src="/res/Nile Delta Icons/Left Panel/my-accounts.svg"
                className={activePage === 0 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">My Accounts</a>
            </li>
            <li className={`list-item ${activePage === 1 ? "selected_item" : ""}`} onClick={() => handlePageClick(1, Routes.CLIENT_CREDIT_CARDS, "Credit Score: 693", credit_cards)}>
              <img src="/res/Nile Delta Icons/Left Panel/credit-cards.svg"
                className={activePage == 1 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Credit Cards</a>
            </li>
            <li className={`list-item ${activePage === 2 ? "selected_item" : ""}`} onClick={() => handlePageClick(2, Routes.CLIENT_LOANS, "Loans", loans)}>
              <img src="/res/Nile Delta Icons/Left Panel/loans.svg"
                className={activePage === 2 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Loans</a>
            </li>
            <li className={`list-item ${activePage === 3 ? "selected_item" : ""}`} onClick={() => handlePageClick(3, Routes.CLIENT_PAY_BILLS, "Pay Bills", pay_bills_tabs)}>
              <img src="/res/Nile Delta Icons/Left Panel/pay-bills.svg"
                className={activePage === 3 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Pay Bills</a>
            </li>
            <li className={`list-item ${activePage == 4 ? "selected_item" : ""}`} onClick={() => handlePageClick(4, Routes.CLIENT_REPORT, "Report an issue", reports)}>
              <img src="/res/Nile Delta Icons/Left Panel/report.svg"
                className={activePage === 4 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Report an issue</a>
            </li>
            <li className={`list-item ${activePage === 5 ? "selected_item" : ""}`} onClick={() => handlePageClick(5, Routes.CLIENT_NOTIFICATIONS, "Notifications", notifications)}>
              <img src="/res/Nile Delta Icons/Left Panel/notifications.svg"
                className={activePage === 5 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Notifications</a>
            </li>
          </ul>
        </div>

        <hr className="divider panel_divider" />
        <div className="nav_menu_links">
          <ul>
            <li className={`list-item`} onClick={() => {
                dispatch(logoutAction());
                navigate(Routes.HOME_PATH);
              }}>
              <img src="/res/Nile Delta Icons/Left Panel/logout.svg" />
              <a className="list-item-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_page_right">
        <div className="main_page_header">
          <h1 className="main_page_right_body">{pageTitle}</h1>
          <hr className="divider" />
          <div className="tab_section">
            {
              tabItems.map((item: any) => {
                return <DeltaTabItem
                  id={item['id']}
                  title={item['title']}
                  active={currentSelect == item['id']}
                  onClick={handleTabClick}
                />
              })
            }
          </div>
          <hr className="divider divider_bottom" />
        </div>
        <div className="main_page_right_body scrollable_body">
          {tabItems[currentSelect - 1]['page']}
        </div>
      </div>
    </div>
  )
}

export default NavMenu