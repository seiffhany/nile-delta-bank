import * as Routes from "./paths";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import HomePage from "../Screens/Home";
import LandingPage from "../Screens/Landing Page/LandingPage";

import MyAccounts from "../Screens/Client Page/MyAccounts";
import CreditCards from "../Screens/Client Page/CreditCards";
import Loans from "../Screens/Client Page/Loans";
import Notifications from "../Screens/Client Page/Notifications";
import ReportRequest from "../Screens/Report/ReportRequest";
import Settings from "../Screens/Settings/Settings";
import PayBills from "../Screens/Client Page/Pay Bills/PayBills";
import BankerPage from "../Screens/Banker Page/BankerPage"
import AdminPage from "../Screens/Admin Page/AdminPage";

import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedRoutesBanker from "./ProtectedRoutesBanker";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";


export const routes = [
    {
        path: Routes.HOME_PATH,
        element: <LandingPage />
    },
    {
        path: Routes.LOGIN_PATH,
        element: <Login />
    },
    {
        path: Routes.REGISTER_PATH,
        element: <Register />
    },
    {
        path: Routes.CLIENT_PATH,
        element: <MyAccounts />,
        parent: <ProtectedRoutes />
    },

    {
        path: Routes.CLIENT_MY_ACCOUNTS,
        element: <MyAccounts />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_CREDIT_CARDS,
        element: <CreditCards />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_LOANS,
        element: <Loans />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_PAY_BILLS,
        element: <PayBills />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_REPORT,
        element: <ReportRequest />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_NOTIFICATIONS,
        element: <Notifications />,
        parent: <ProtectedRoutes />
    },
    {
        path: Routes.CLIENT_SETTINGS,
        element: <Settings />,
        parent: <ProtectedRoutes />
    },

    {
        path: Routes.BANKER_VIEW_CLIENTS,
        element: <BankerPage />,
        parent: <ProtectedRoutesBanker />
    },
    {
        path: Routes.BANKER_VIEW_REPORTS,
        element: <BankerPage />,
        parent: <ProtectedRoutesBanker />
    },
    {
        path: Routes.BANKER_VIEW_REQUESTS,
        element: <BankerPage />,
        parent: <ProtectedRoutesBanker />
    },
    {
        path: Routes.ADMIN_VIEW_REPORTS,
        element: <AdminPage />,
        parent: <ProtectedRoutesAdmin />
    }

]