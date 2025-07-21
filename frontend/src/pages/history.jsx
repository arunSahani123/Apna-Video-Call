import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Box, Card, CardContent, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
        <Box minHeight="100vh" bgcolor="#f5f5f5">
            <AppBar position="static" color="primary" elevation={2}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h5" fontWeight={700} sx={{ flexGrow: 1 }}>
                        Meeting History
                    </Typography>
                    <IconButton color="inherit" onClick={() => routeTo("/home")}> <HomeIcon /> </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ py: 6 }}>
                {meetings.length !== 0 ? (
                    <Grid container spacing={4}>
                        {meetings.map((e, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2, background: 'linear-gradient(120deg, #fff 80%, #f5f5f5 100%)' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600 }} color="primary" gutterBottom>
                                            Code: {e.meetingCode}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Date: {formatDate(e.date)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Paper elevation={0} sx={{ p: 6, textAlign: 'center', mt: 8, borderRadius: 3 }}>
                        <Typography variant="h6" color="text.secondary">No meeting history found.</Typography>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}