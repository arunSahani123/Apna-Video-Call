import LogoutIcon from '@mui/icons-material/Logout';
import RestoreIcon from '@mui/icons-material/Restore';
import {
    AppBar,
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { AuthContext } from '../contexts/AuthContext';
import withAuth from '../utils/withAuth';


function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight={700} sx={{ flexGrow: 1 }}>
            Apna Video Call
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              startIcon={<RestoreIcon />}
              color="inherit"
              onClick={() => navigate("/history")}
            >
              History
            </Button>
            <Button
              startIcon={<LogoutIcon />}
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        minHeight="calc(100vh - 64px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#f5f5f5"
      >
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            p: 4,
            gap: 4,
            maxWidth: 900,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box flex={1}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Providing Quality Video Call Just Like Quality Education
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                onChange={e => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                value={meetingCode}
                fullWidth
              />
              <Button
                onClick={handleJoinVideoCall}
                variant='contained'
                size="large"
                disabled={!meetingCode}
              >
                Join
              </Button>
            </Stack>
          </Box>
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <img
              srcSet='/logo3.png'
              alt="Logo"
              style={{ maxWidth: "250px", width: "100%" }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
}


export default withAuth(HomeComponent)