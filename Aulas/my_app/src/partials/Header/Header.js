import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
} from '@mui/material'


// import { makeStyles } from '@mui/material/styles'

import MenuIcon from '@mui/icons-material/Menu'

import { defaultTheme } from '../../themes/defaultTheme.js'
import { styles } from './Header.style'

export default function Header() {
  
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
    </ThemeProvider>
  )
}