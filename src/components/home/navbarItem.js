import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import CompareIcon from '@mui/icons-material/Compare';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainItems = [ {
    id: 0,
    icon: <ShowChartIcon />,
    label: 'Stock Market Index',
    route: 'index',
},
    {
        id: 1,
        icon: <BusinessIcon />,
        label: 'Companies',
        route: 'companies',
    },
    {
        id: 2,
        icon: <CompareIcon />,
        label: 'Compare',
        route: 'compare',
    },

    {
        id: 3,
        icon: <PeopleIcon />,
        label: 'Profile',
        route: 'profile',
    },
    {
        id: 4,
        icon: <LogoutIcon />,
        label: 'Log Out',
        route: 'logout',
    },]
