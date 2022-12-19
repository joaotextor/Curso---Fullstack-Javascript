import { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import { 
  useNavigate
} from 'react-router-dom'


import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { defaultTheme } from '../../themes/defaultTheme.js'
import { styles } from './Header.style'

export default function Header() {
  
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    handleToggleMenu()
    navigate(route)
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={styles["title"]}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handleToggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={styles.title}>
              Home
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem key="home">
            <ListItemButton onClick={() => handleMenuClick("/")}>
              <ListItemIcon >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="customers">
            <ListItemButton onClick={() => handleMenuClick("/customers")}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText>
                Add Customer
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  )
}