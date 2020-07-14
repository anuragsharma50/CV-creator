import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import StarsIcon from '@material-ui/icons/Stars';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HelpIcon from '@material-ui/icons/Help';

import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(7.2),
      width: theme.spacing(27),
      height: theme.spacing(30),
      textDecoration: 'none',
    },
  },
  card: {
    width: theme.spacing(27),
    height: theme.spacing(30),
},
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to='/personal' >
            <Paper className={classes.card}>
                <PersonIcon style={{fontSize:150}} />
                <h2>Personal Details</h2>
            </Paper>
            </Link>

            <Link to='/education' >
                <Paper className={classes.card}>
                    <MenuBookIcon style={{fontSize:150}}/>
                    <h2>Education</h2>
                </Paper>
            </Link>

            <Link to='/experience' >
                <Paper className={classes.card}>
                    <BusinessCenterIcon style={{fontSize:150}}/>
                    <h2>Experience</h2>
                </Paper>
            </Link>

            <Link to='/skills' >
                <Paper className={classes.card}>
                    <StarsIcon style={{fontSize:150}}/>
                    <h2>Skills</h2>
                </Paper>
            </Link>

            <Link to='/objective' >
                <Paper className={classes.card}>
                    <AlarmOnIcon style={{fontSize:150}}/>
                    <h2>Objective</h2>
                </Paper>
            </Link>

            <Link to='/projects' >
                <Paper className={classes.card}>
                    <WbIncandescentIcon style={{fontSize:150}}/>
                    <h2>Projects</h2>
                </Paper>
            </Link>

            <Link to='/more' >
                <Paper className={classes.card}>
                    <AddCircleIcon style={{fontSize:150}}/>
                    <h2>Add More Section</h2>
                </Paper>
            </Link>

            <Link to='/help' >
                <Paper className={classes.card}>
                    <HelpIcon style={{fontSize:150}}/>
                    <h2>Help</h2>
                </Paper>
            </Link>
        </div>
    );
}

export default Home
