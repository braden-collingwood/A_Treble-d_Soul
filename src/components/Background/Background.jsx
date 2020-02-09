import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
// import Styles from './Startup.module.css'

export default function SampleComponent() {

    return (
        <div>
            <Box display='flex' flex='1' position="absolute" alignItems="center" justifyContent='space-around' width={1} style={{ height: '100vh' }} bgcolor="success.light">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid container item xs={5}>
                        <Typography style={{fontFamily: "Roboto"}} variant="h2" component="h2" gutterBottom>
                            Let's get started!
                        </Typography>
                    </Grid>
                    <Grid container item xs={4}>
                        <Typography style={{fontFamily: "Roboto"}} variant="h6" component="h4" gutterBottom>
                            Connect to Spotify and let the music flow.
                        </Typography>
                    </Grid>

                </Grid>


            </Box>
            
        </div>
    )
}