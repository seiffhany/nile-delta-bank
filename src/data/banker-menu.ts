import * as Routes from '../Routes/paths'
import { view_clients_tabs } from './banker-tabs'
import { view_reports_tabs } from './banker-tabs'
import { view_requests_tabs } from './banker-tabs'


export const banker_menues = [
    {
        title: "View Clients",
        route: Routes.BANKER_VIEW_CLIENTS,
        tabs: view_clients_tabs,
        icon: "/res/Nile Delta Icons/Left Panel/view-clients.svg"
    },
    {
        title: "View Requests",
        route: Routes.BANKER_VIEW_REQUESTS,
        tabs: view_requests_tabs,
        icon: "/res/Nile Delta Icons/Left Panel/view-requests.svg"
    },
    {
        title: "View Reports",
        route: Routes.BANKER_VIEW_REPORTS,
        tabs: view_reports_tabs,
        icon: "/res/Nile Delta Icons/Left Panel/report.svg"
    }
    
]