import React from 'react'
import * as mui from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Tilt from 'react-parallax-tilt';




const ColorButton = styled(mui.Button)(({ theme }) => ({
    height: '60px',
    width: '300px',
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: "orange",
    fontWeight: '600',
    color: "black",
    '&:hover': {
      backgroundColor: orange[500],
      color: "#1a1a1a",
    },
}));

export default function Welcome() {
    return (
        <mui.Box
            sx={{
                flexGrow: 1,
                height: 630,
                // backgroundColor: 'primary.dark',
                // '&:hover': {
                // backgroundColor: 'primary.main',
                // opacity: [0.9, 0.8, 0.7],
                // },
            }}
        >
            <mui.Grid container>
                <mui.Grid item xs={6} sx={{ height: 630, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <span className='header_font' style={{fontSize: '70px', color: 'orange'}} >SEND CRYPTO</span>
                    <span className='header_font' style={{fontSize: '70px', color: 'black', marginTop: '-20px'  }} >ACROSS THE WORLD</span>
                    {/* <span className='sub_header_font' style={{fontSize: '17px', color: 'black', fontWeight: '500'}}>Explore the world of BloackChain Technology. KRYPTO is an Etherium based Crypocurrency Wallet. Buy and Sell cryptocurrency using KRYPTO</span> */}

                    {/* <mui.Button  variant="outlined" color="primary" size='large' startIcon={<AccountBalanceWalletIcon />} sx={{marginLeft: 2}}>Login</mui.Button> */}
                    <ColorButton variant="contained" size="large" startIcon={<AccountBalanceWalletIcon />} sx={{marginTop: '10px', borderRadius: '10px' }}>Connet Wallet</ColorButton>

                    <Tilt glareEnable={false} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" style={{marginTop: '25px'}}>
                        <div style={{ height: '270px', width: '470px', borderRadius: '20px', background: 'url("https://wallpaperboat.com/wp-content/uploads/2019/06/black-and-orange-08-920x518.jpg") no-repeat fixed center' }}>
                            
                        </div>
                    </Tilt>

                </mui.Grid>

                {/* <mui.Grid container item xs={6} justifyContent="center" alignItems="center" sx={{background: 'green', }}>
                    Hello
                </mui.Grid> */}
            </mui.Grid>
        </mui.Box>
    )
}
