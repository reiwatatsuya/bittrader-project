import React,{ CSSProperties } from 'react'
import { Box, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import { NavLink } from 'react-router-dom'
import AssessmentIcon from '@mui/icons-material/Assessment';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';


interface SideBarProps {
    drawerWidth: number
    mobileOpen: boolean
    handleDrawerClose: () => void
    handleDrawerTransitionEnd: () => void
  }

  interface menuItem{
    text: string,
    path: string,
    icon: React.ComponentType
  }
  
  const SideBar = ({drawerWidth,mobileOpen,handleDrawerClose,handleDrawerTransitionEnd}:SideBarProps) => {
    const menuItems:menuItem[] = [
      {text: 'loginhome', path: '/', icon: HomeWorkIcon},
      {text: 'report', path: '/report', icon: AssessmentIcon},
      {text: 'trade', path: '/trade', icon: PublishedWithChangesIcon},
      {text: 'analysis', path: '/analysis', icon: SsidChartIcon},
    ]
  //文字のスタイルを定義( メニュー全体のスタイル)
    const baseLinkstyle:CSSProperties = {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }
  //リンクに飛んだ後の背景色を定義
    const activeLinkStyle:CSSProperties = {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
      //Drower Setting(Drawerに表示する内容を設定)
      const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item,index) => (
            // メニューをクリックした時の挙動を設定 => isActiveはメニューが選択された際にTrueとなる
            <NavLink key={index} to={item.path} style={({isActive}) => {console.log("選択されたメニューは",item.text, isActive)
              return {
                ...baseLinkstyle,
                ...(isActive ? activeLinkStyle : {})
              }
            }} >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
      </div>
    );
  
  
  
    return (
      <Box
          component="nav"
          // sm、md、lg、xl、xxlでサイドバーの幅を指定
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
          aria-label="mailbox folders"
        >
          {/* スマホ用 */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          {/* PC用 */}
          <Drawer
            variant="permanent"
            sx={{
              // sm、md、lg、xl、xxlでサイドバーの幅を変更
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
    )
  }
  

export default SideBar