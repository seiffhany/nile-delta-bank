import * as Routes from '../Routes/paths'
import { view_admin_reports_tabs } from './admin-tabs'


export const admin_menues = [
    {
        title: "View Technical Reports",
        route: Routes.ADMIN_VIEW_REPORTS,
        tabs: view_admin_reports_tabs,
        icon: "/res/Nile Delta Icons/Left Panel/report.svg"
    }
    
]