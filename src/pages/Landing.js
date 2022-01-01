
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import Page from '../components/Page';
import { pink } from '@mui/material/colors';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-around'
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
      <Container sx={{ display: 'flex', direction: 'column'}}>
        <Box sx={{ flex: 2, m: 'auto'}}>
          <Typography variant='h2' sx={{color: pink[500]}}>RemindMom</Typography>
          <Box sx={{ py: 2, fontSize:30 }}>
            <Typography variant={'subtitle'} display="block" sx={{color: pink[500]}}>
              Aplikasi untuk mengingatkan orang tua akan pentingnya memperhatikan tumbuh kembang anak.
            </Typography>
          </Box>
          <ColorButton variant="contained" size="large">
            Coba Sekarang
          </ColorButton>
        </Box>
        <Box
          component="img"
          src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header4/Header-4-1.png"
          sx={{ flex: 1, width: '100', height: 'auto', p: 4, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />
      </Container>
    </RootStyle>
  );
}
