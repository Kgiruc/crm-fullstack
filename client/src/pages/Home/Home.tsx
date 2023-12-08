import { useAppSelector } from '../../store/store';
import AsideMenu from './components/AsideMenu';

function Home() {
  const isLogin = useAppSelector((state) => state.account.isLogin);

  return (
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       boxSizing: 'border-box',
    //       height: '100vh',
    //       minWidth: '264px',
    //       backgroundColor: '#0C2556',
    //       overflow: 'auto',
    //       padding: '20px 0',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Logo />
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         gap: '30px',
    //         width: '100%',
    //       }}
    //     >
    //       <Button
    //         variant="contained"
    //         component={Link}
    //         to="/customers"
    //         sx={{
    //           width: '100%',
    //           marginBottom: '8px',
    //           flexDirection: 'column',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           '& .MuiButton-startIcon': {
    //             marginBottom: '4px',
    //           },
    //           '& .MuiButton-label': {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //           },
    //         }}
    //       >
    //         <PeopleIcon sx={{ fontSize: '32px' }} />
    //         <Typography variant="body2">Klienci</Typography>
    //       </Button>

    //       <Button
    //         variant="contained"
    //         component={Link}
    //         to="/agreements"
    //         sx={{
    //           width: '100%',
    //           marginBottom: '8px',
    //           flexDirection: 'column',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           '& .MuiButton-startIcon': {
    //             marginBottom: '4px',
    //           },
    //           '& .MuiButton-label': {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             gap: '4px',
    //           },
    //         }}
    //       >
    //         <DescriptionIcon sx={{ fontSize: '32px' }} />
    //         <Typography variant="body2">Umowy</Typography>
    //       </Button>

    //       <Button
    //         variant="contained"
    //         component={Link}
    //         to="/invoices"
    //         sx={{
    //           width: '100%',
    //           marginBottom: '8px',
    //           flexDirection: 'column',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           '& .MuiButton-startIcon': {
    //             marginBottom: '4px',
    //           },
    //           '& .MuiButton-label': {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             gap: '4px',
    //           },
    //         }}
    //       >
    //         <RequestPageIcon sx={{ fontSize: '32px' }} />
    //         <Typography variant="body2">Faktury</Typography>
    //       </Button>

    //       <Button
    //         variant="contained"
    //         component={Link}
    //         to="/tasks"
    //         sx={{
    //           width: '100%',
    //           marginBottom: '8px',
    //           flexDirection: 'column',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           '& .MuiButton-startIcon': {
    //             marginBottom: '4px',
    //           },
    //           '& .MuiButton-label': {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             gap: '4px',
    //           },
    //         }}
    //       >
    //         <AssignmentIcon sx={{ fontSize: '32px' }} />
    //         <Typography variant="body2">Zadania</Typography>
    //       </Button>

    //       <Button
    //         variant="contained"
    //         component={Link}
    //         to="/store"
    //         sx={{
    //           width: '100%',
    //           marginBottom: '8px',
    //           flexDirection: 'column',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           '& .MuiButton-startIcon': {
    //             marginBottom: '4px',
    //           },
    //           '& .MuiButton-label': {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //             gap: '4px',
    //           },
    //         }}
    //       >
    //         <LocalMallIcon sx={{ fontSize: '32px' }} />
    //         <Typography variant="body2">Magazyn</Typography>
    //       </Button>
    //     </Box>
    //     {isLogin ? (
    //       <Box
    //         sx={{
    //           textAlign: 'center',
    //           margin: '0',
    //         }}
    //       >
    //         <ProfileButton />
    //       </Box>
    //     ) : (
    //       <Box sx={{ width: '100%' }}>
    //         <Button sx={{ width: '100%' }}>
    //           <Link to="/login">Zaloguj się</Link>
    //         </Button>
    //         <Button sx={{ width: '100%' }}>
    //           <Link to="/register">Rejestracja</Link>
    //         </Button>
    //       </Box>
    //     )}
    //   </Box>
    <AsideMenu />
  );
}

export default Home;
