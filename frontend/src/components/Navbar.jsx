import React from 'react'
import {AppBar,Toolbar,Button,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
const Navbar = () => {
  return (
    <div>
      <AppBar id="nav">
        <Toolbar>
          <Typography sx={{flexGrow:1}}><h2>Movie Management App</h2></Typography>
        <div><Button><Link to={'/'} style={{color:'white'}}>Home</Link></Button></div>
        <Button><Link to='/add' style={{color:'white'}}>AddMovie</Link></Button>
        <Button style={{color:'white'}}>About us</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar