import React from 'react'
import NavItemList from './navItemList'
import { Box, Drawer, Toolbar } from '@mui/material';

const drawerWidth = 240;

export default function Navbar() {
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: "rgba(18,18,18,0.9)",
            },
                }}
                variant="permanent"
                anchor="left">
                    <Toolbar />
                    <NavItemList />
                </Drawer>
            </Box>
        </div>
    )
}
