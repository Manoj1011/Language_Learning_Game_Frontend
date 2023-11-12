import React, {useContext} from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import UserStore from '../../contexts/UserStore';

const LandingPage = () => {
  const {getSession} = useContext(UserStore);
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <Navbar />
        <Grid item>
            <Typography variant="h2">
                Language Learning Game
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4">
                Welcome! Learn Languages by playing games
            </Typography>
        </Grid>

        <Grid item>
            {!getSession()? <Box m={2} display="flex" flexDirection="row" alignItems="center">
                <Button variant="contained" style={{marginRight:"8px"}} href="/signup">
                    Signup
                </Button>
                <Button variant="contained" style={{marginRight:"8px"}} href="/signin">
                    Signin
                </Button>
            </Box>:
            <Button variant="contained" style={{marginRight:"8px"}} href="/admin">
                    Go to Languages
            </Button>
            
            }
        </Grid>

    </Grid>
  );
};

export default LandingPage;
