import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Transition from 'react-transition-group/Transition';
import Styles from './Startup.module.css'

// const duration = 300;

// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// }

// const transitionStyles = {
//     entering: { opacity: 0, display: 'none' },
//     entered:  { opacity: 1 , display: 'block'},
//     exited:  { opacity: 0, display: 'none'},
// };

// const Fade = ({ in: inProp }) => (
//     <Transition in={inProp} timeout={duration}>
//       {state => (
//         <div style={{
//           ...defaultStyle,
//           ...transitionStyles[state]
//         }}>
//           I'm a fade Transition!
//         </div>
//       )}
//     </Transition>
//   );

export default function SampleComponent() {
    return (
        <div className = {Styles.startup}>
            <Box display='flex' flex='1' alignItems="center" justifyContent='space-around' style={{ height: '100vh' }} bgcolor="info.light">
                <Typography style={{fontWeight: "bold"}} variant="h1" component="h2" gutterBottom>
                    A Trebled Soul.
                </Typography>
            </Box>
            
        </div>
    )
}
