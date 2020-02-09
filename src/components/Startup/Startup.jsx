import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Styles from './Startup.module.css'
import { positions } from '@material-ui/system';

export default function SampleComponent() {
    return (
        <div className = {Styles.startup}>
            <Box display='flex' flex='1' position="absolute" alignItems="center" justifyContent='space-around' width={1} style={{height: '100vh', }} bgcolor="info.light">
                <Typography style={{fontFamily: "Roboto"}} variant="h1" component="h1" gutterBottom>
                    A Trebled Soul.
                </Typography>
            </Box>
            
        </div>
    )
}
