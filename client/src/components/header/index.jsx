import React from 'react'
import * as mui from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/crown.svg';

import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const ColorButton = styled(mui.Button)(({ theme }) => ({
    fontSize:'17px',
    color: theme.palette.getContrastText(orange[500]),
    margin: '0 10px',
    fontWeight: '600',
    color: "black",
    // backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[500],
      color: "white",
      fontWeight: '600',
    },
}));


export default function Header() {
  return (
    <mui.Box sx={{ flexGrow: 1 }}>
        <mui.AppBar position="static" 
            sx={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row'}}
            >
            {/* <mui.Toolbar> */}
                <div style={{ flexGrow: 4/5, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-end'}}>
                    <img src={Logo} alt='logo' width='60px' height='60px' />
                    <mui.Typography variant="h5" component="div" color='black'>
                        KRYPTO
                    </mui.Typography>
                </div>
                
                <ColorButton className='hide_content' color="warning" size='large'>Wallet</ColorButton>
                <ColorButton className='hide_content' color="warning" size='large'>Market</ColorButton>
                <ColorButton className='hide_content' color="warning" size='large'>Exchange</ColorButton>
                <ColorButton className='hide_content' color="warning" size='large'>About</ColorButton>
                <ColorButton variant="outlined" color="warning" size='large' startIcon={<AccountCircleIcon />} sx={{marginLeft: 2}}>Login</ColorButton>
                <MenuIcon className='show_content' color='warning'/>

            {/* </mui.Toolbar> */}
        </mui.AppBar>
    </mui.Box>
  )
}
