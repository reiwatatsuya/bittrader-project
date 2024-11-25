import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from '../common/SideBar';


const drawerWidth = 240;

export default function ResponsiveDrawer() {
    //Drawerの開閉状態を管理mobileOpen:モバイルの状態かどうかを定義している
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
  
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
    };
  
    const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
    };
  
    const handleDrawerToggle = () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            // 基本的にsm、md、lg、xl、xxlのサイズはすべて統一する
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" fontWeight={"fontWeighBold"}>
              BitCoin自動売買システム
            </Typography>
          </Toolbar>
        </AppBar>
         <SideBar 
         mobileOpen={mobileOpen} 
         handleDrawerClose={handleDrawerClose} 
         handleDrawerTransitionEnd={handleDrawerTransitionEnd} 
         drawerWidth={drawerWidth} 
         />
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            width: { md: `calc(100% - ${drawerWidth}px)` },
            bgcolor: (theme)=>theme.palette.grey[200]
            ,minHeight: '100vh'
          }} 
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
  }
  