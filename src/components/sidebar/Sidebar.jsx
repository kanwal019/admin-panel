import "./sidebar.scss";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import DescriptionIcon from '@mui/icons-material/Description';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">React Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardTwoToneIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PeopleAltIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2TwoToneIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <ShoppingCartTwoToneIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingTwoToneIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <LeaderboardTwoToneIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyTwoToneIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsSharpIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar