import AllAccountsPage from '../Screens/Client Page/My Accounts/AllAccountsPage'
import CurrentPage from '../Screens/Client Page/My Accounts/CurrentPage'
import SavingsPage from '../Screens/Client Page/My Accounts/SavingsPage'

import LoanRequestsPage from '../Screens/Client Page/Loans/LoanRequestsPage'
import MyLoansPage from '../Screens/Client Page/Loans/MyLoansPage'

import CreditCardRequestsPage from '../Screens/Client Page/Credit Cards/CreditCardRequestsPage'
import CreditCardsPage from '../Screens/Client Page/Credit Cards/CreditCardsPage'

import NotificationsPage from '../Screens/Client Page/Notifications/NotificationsPage'
import ReportRequest from '../Screens/Report/ReportRequest'
import Settings from '../Screens/Settings/Settings'
import PayBills from '../Screens/Client Page/Pay Bills/PayBills'


export const my_accounts = [
  {
    id: 1,
    title: 'All Accounts',
    page: <AllAccountsPage />,
  },
  {
    id: 2,
    title: 'Savings',
    page: <SavingsPage />,
  },
  {
    id: 3,
    title: 'Current',
    page: <CurrentPage />,
  },
]

export const credit_cards = [
  {
    id: 1,
    title: 'Credit Cards',
    page: <CreditCardsPage />,
  },
  {
    id: 2,
    title: 'Requests',
    page: <CreditCardRequestsPage />,
  },
]

export const loans = [
  {
    id: 1,
    title: 'My Loans',
    page: <MyLoansPage />,
  },
  {
    id: 2,
    title: 'Requests',
    page: <LoanRequestsPage />,
  },
]

export const notifications = [
  {
    id: 1,
    title: 'All Notifications',
    page: <NotificationsPage />,
  },
]

export const reports = [
  {
    id: 1,
    title: 'Report an Issue',
    page: <ReportRequest />,
  },
]

export const settings = [
  {
    id: 1,
    title: 'Settings',
    page: <Settings/>,
  },
]

export const pay_bills_tabs = [
  {
    id: 1,
    title: 'Pay Bills',
    page: <PayBills/>,
  },
]
