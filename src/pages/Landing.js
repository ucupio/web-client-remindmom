import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import { styled } from '@mui/material/styles';
import { Typography, Button, Box } from '@mui/material';
import Page from '../components/Page';
import { pink } from '@mui/material/colors';

// ----------------------------------------------------------------------


const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'center',
    alignItems : 'center',
    height: '100%'
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  '&:hover': {
    backgroundColor: pink[700],
  },
}));

export default function Login() {
  return (
    <RootStyle title="RemindMom">
      <Box sx={{ flex: 2, pl:{md:16, xs: 0}}}>
        <Box
          component="img"
          src={require("../assets/remind-mom-logo.png")}
          sx={{width: 'auto', height: '120px', mx: 'auto', mt:2,
            background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            WebkitBackgroundClip: "image",
            WebkitTextFillColor: "transparent",
          }}
          
        />
        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}> RemindMom</Typography>
        <Box sx={{ fontSize:24, mb: 2 }}>
          <Typography variant={'subtitle'} display="block" sx={{color: pink[500]}}>
            Aplikasi untuk mengingatkan orang tua akan pentingnya memperhatikan tumbuh kembang anak.
          </Typography>
        </Box>
        <ColorButton variant="contained" size="large" to="/find" component={RouterLink}>
          Coba Sekarang
        </ColorButton>
      </Box>
      <Box
        component="img"
        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header4/Header-4-1.png"
        sx={{ flex: 1, width: 'auto', height: '200',py: 4, px: 16, mx: 'auto', my:0}}
      />
      
    </RootStyle>
  );
}
