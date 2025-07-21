import {
    AppBar,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <Box minHeight="100vh" bgcolor="#f5f5f5">
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight={700}>
            Apna Video Call
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button color="inherit" onClick={() => router("/aljk23")}>Join as Guest</Button>
            <Button color="inherit" onClick={() => router("/auth")}>Register</Button>
            <Button color="inherit" onClick={() => router("/auth")}>Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center" justifyContent="space-between">
            <Box flex={1}>
              <Typography variant="h3" fontWeight={700} mb={2}>
                <Box component="span" color="#FF9839">Connect</Box> with your loved Ones
              </Typography>
              <Typography variant="h6" color="text.secondary" mb={4}>
                Cover a distance by Apna Video Call
              </Typography>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                size="large"
                sx={{ borderRadius: 3, px: 5 }}
              >
                Get Started
              </Button>
            </Box>
            <Box flex={1} display="flex" justifyContent="center" alignItems="center">
              <img src="/mobile.png" alt="Mobile" style={{ maxWidth: "350px", width: "100%" }} />
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}