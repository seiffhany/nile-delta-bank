import React from 'react';
import { useEffect, useRef, useState, ReactElement } from 'react';
import '../css/nav-menu.css';
import { useNavigate } from 'react-router-dom';
import * as Routes from '../Routes/paths';
import { Tabs, notification } from 'antd';
import type { TabsProps } from 'antd';
import '../data/client-tabs';
import { view_clients_tabs } from '../data/banker-tabs';
import DeltaTabItem from './DeltaTabItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { admin_menues } from '../data/admin-menu';
import { view_admin_reports_tabs } from '../data/admin-tabs';
import { logoutAction } from '../redux/actions/logoutAction';

// import { use } from 'express/lib/router';

function NavMenuAdmin({ children }: { children: any }) {
  const dispatch: any = useDispatch();

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const getPageTitle = (path: string) => {
    return "Admin Reports"
    // switch (path) {
    //   case Routes.CLIENT_MY_ACCOUNTS:
    //     return "My Accounts";
    //   case Routes.CLIENT_CREDIT_CARDS:
    //     return "Credit Score: 693";
    //   case Routes.CLIENT_LOANS:
    //     return "Loans";
    //   case Routes.CLIENT_PAY_BILLS:
    //     return "Pay Bills";
    //   case Routes.CLIENT_REPORT:
    //     return "Report an issue";
    //   case Routes.CLIENT_SETTINGS:
    //     return "Settings";
    //   default:
    //     return "Notifications";
    // }
  }

  const getIndex = (path: string) => {
    return 0;
    // switch (path) {
    //   case Routes.CLIENT_MY_ACCOUNTS:
    //     return 0;
    //   case Routes.CLIENT_CREDIT_CARDS:
    //     return 1;
    //   case Routes.CLIENT_LOANS:
    //     return 2;
    //   case Routes.CLIENT_PAY_BILLS:
    //     return 3;
    //   case Routes.CLIENT_REPORT:
    //     return 4;
    //   case Routes.CLIENT_SETTINGS:
    //     return 6;
    //   default:
    //     return 5;
    // }
  }

  const getTabItems = (path: string) => {
    switch (path) {
        default:
            return view_admin_reports_tabs;
    //   case Routes.CLIENT_MY_ACCOUNTS:
    //     return my_accounts;
    //   case Routes.CLIENT_CREDIT_CARDS:
    //     return credit_cards;
    //   default:
    //     return loans;
      // case Routes.CLIENT_LOANS:
      //   return 2;
      // case Routes.CLIENT_PAY_BILLS:
      //   return 3;
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
              <h1>{!user.first_name ? "Admin" : user.first_name +  user.last_name}</h1>
              <div className="edit-button">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nav_menu_links">
          <ul>
            {
                admin_menues.map((item, index) => {
                    return <li className={`list-item ${activePage === index ? "selected_item" : ""}`} onClick={() => handlePageClick(index, item['route'], item['title'], item['tabs'])}>
                    <img src={item['icon']}
                      className={activePage === index ? "selected_item_icon" : ""} alt="" />
                    <a className="list-item-link">{item['title']}</a>
                  </li>
                })
            }
          </ul>
        </div>

        <hr className="divider panel_divider" />
        <div className="nav_menu_links">
          <ul>
            <li className={`list-item`} onClick={() => {
                dispatch(logoutAction());
                navigate(Routes.HOME_PATH)
              }}>
              <img src="/res/Nile Delta Icons/Left Panel/logout.svg" alt="" />
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
                  id = {item['id']}
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

export default NavMenuAdmin