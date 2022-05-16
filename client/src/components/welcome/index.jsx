import React from 'react'
import * as mui from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Tilt from 'react-parallax-tilt';

const style = {
    table1: {border: '3px solid black', borderTopLeftRadius: '15px', padding: '25px 65px', fontSize: '25px', textAlign: 'center',},
    table2: {border: '3px solid black', padding: '25px 65px', fontSize: '25px', textAlign: 'center'},
    table3: {border: '3px solid black', borderTopRightRadius: '15px', padding: '25px 65px', fontSize: '25px', textAlign: 'center'},
    table4: {border: '3px solid black', borderBottomLeftRadius: '15px', padding: '25px 65px', fontSize: '25px', textAlign: 'center'},
    table5: {border: '3px solid black', borderBottomRightRadius: '15px', padding: '25px 65px', fontSize: '25px', textAlign: 'center'},
    inputField: {marginTop: '15px', height: '45px', width: '96%', borderRadius: '9px', background: 'black', color: 'orange', fontSize: '18px', paddingLeft: '15px'},
    card: { height: '280px', width: '480px', borderRadius: '20px', background: 'url("https://wallpaperboat.com/wp-content/uploads/2019/06/black-and-orange-08-920x518.jpg") no-repeat fixed center' }
}

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


const table = [
    <table style={{marginTop: '30px'}}> 
        <tr>
            <td className='header_font' style={style.table1}>Etherium</td>
            <td className='header_font' style={style.table2}>Reliable</td>
            <td className='header_font' style={style.table3}>Security</td>
        </tr>
        <tr>
            <td className='header_font' style={style.table4}>Web 3.0</td>
            <td className='header_font' style={style.table2}>LowFees</td>
            <td className='header_font' style={style.table5} >Blockchain</td>
        </tr>
    </table>
];

export default function Welcome() {
    return (
        <mui.Box
            sx={{
                flexGrow: 1,
                height: 800
            }}
        >
            <mui.Grid container>
                <mui.Grid item xs={12} md={6} sx={{ height: 630, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <span className='header_font' style={{fontSize: '70px', color: 'orange'}} >SEND CRYPTO</span>
                    <span className='header_font' style={{fontSize: '70px', color: 'black', marginTop: '-20px'}} >ACROSS THE WORLD</span>
                    <span className='sub_header_font' style={{fontSize: '17px', color: 'black', fontWeight: '500', marginTop: '10px'}}>Explore the world of BloackChain Technology. KRYPTO is an Etherium based Crypocurrency Wallet. Buy and Sell cryptocurrency using KRYPTO</span>

                    <ColorButton variant="contained" size="large" startIcon={<AccountBalanceWalletIcon />} sx={{marginTop: '20px', borderRadius: '10px' }}>Connet Wallet</ColorButton>

                    {table}
                </mui.Grid>

                <mui.Grid container item xs={12} md={6} justifyContent="center" alignItems="center" >
                    <mui.Grid container item xs={12} md={12} sx={{height: 1/2}} justifyContent="center" alignItems="center">
                        <Tilt glareEnable={false} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" style={{paddingTop: '40px'}}>
                            <div style={style.card}>
                            
                            </div>
                        </Tilt>
                    </mui.Grid>
                    <mui.Grid container item xs={12} md={12} sx={{height: 1}} justifyContent="center" alignItems="flex-start">
                        <mui.Box
                            sx={{
                                marginTop: '20px',
                                padding: '10px 15px',
                                width: 2/3,
                                height: 'auto',
                                borderRadius: '15px',
                                // backgroundColor: 'orange',
                                // '&:hover': {
                                // backgroundColor: 'orange',
                                // },
                            }}
                        >
                                <input type='text' placeholder='Address To' style={style.inputField} />
                                <input type='text' placeholder='Amount (ETH)' style={style.inputField} />
                                <ColorButton variant="contained" size="large" startIcon={<SendIcon />} sx={{width: '100%', marginTop: '15px', borderRadius: '10px' }}>Send Etherium</ColorButton>
                        </mui.Box>
                    </mui.Grid>
                </mui.Grid>
            </mui.Grid>
        </mui.Box>
    )
}
