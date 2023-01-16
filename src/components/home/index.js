import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';

import{mainItems} from './navbarItem'
const drawerWidth = 240;
import { useNavigate ,Outlet} from "react-router-dom";

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar />

            <Divider />
            <Divider />
            <Divider />
            <List>

                {mainItems.map((text, index) => (
                    <ListItem button key={text.id}  onClick={() => navigate(text.route)} disablePadding>
                        <ListItemButton >
                            <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)','&:hover, &:focus': {
                                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                                }}}>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/*<Divider />*/}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div  className="container-fluid">
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                }}
            >
                <Outlet />

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { width: drawerWidth,boxSizing: 'border-box',backgroundColor: '#101F33',color: 'rgba(255, 255, 255, 0.7)' },

                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#101F33',color: 'rgba(255, 255, 255, 0.7)' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


            </Box>
        </Box>
        </div>

    );
}

ResponsiveDrawer.propTypes = {

    window: PropTypes.func,
};