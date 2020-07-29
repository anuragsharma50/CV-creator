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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
      marginTop: theme.spacing(3.5),
      marginBottom: theme.spacing(3.4),
      [theme.breakpoints.only('xs')]: {
        margin: 'auto',
        width: theme.spacing(38),
        height: theme.spacing(10.68),
        overflowY: 'hidden', 
    },
    },
  },
  card: {
    width: theme.spacing(27),
    height: theme.spacing(30),
    [theme.breakpoints.only('xs')]: {
        width: theme.spacing(38),
        height: theme.spacing(6),
    },
},
    icon: {
        fontSize: 150,
        [theme.breakpoints.only('xs')]: {
            fontSize: 40,
            float:'left',
        },
    },
    text: {
        [theme.breakpoints.only('xs')]: {
            padding: 7,
        },
    }
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div className={classes.root}>
            <Link to='/personal' >
            <Paper className={classes.card}>
                <PersonIcon className={classes.icon} />
                <h2 className={classes.text}>Personal Details</h2>
            </Paper>
            </Link>

            <Link to='/education' id='education'>
                <Paper className={classes.card}>
                    <MenuBookIcon className={classes.icon}/>
                    <h2 className={classes.text}>Education</h2>
                </Paper>
            </Link>

            <Link to='/experience' id='experience'>
                <Paper className={classes.card}>
                    <BusinessCenterIcon className={classes.icon}/>
                    <h2 className={classes.text}>Experience</h2>
                </Paper>
            </Link>

            <Link to='/skills' id='skill'>
                <Paper className={classes.card}>
                    <StarsIcon className={classes.icon}/>
                    <h2 className={classes.text}>Skills</h2>
                </Paper>
            </Link>

            <Link to='/objective' id='objective'>
                <Paper className={classes.card}>
                    <AlarmOnIcon className={classes.icon}/>
                    <h2 className={classes.text}>Objective</h2>
                </Paper>
            </Link>

            <Link to='/projects' id='projects'>
                <Paper className={classes.card}>
                    <WbIncandescentIcon className={classes.icon}/>
                    <h2 className={classes.text}>Projects</h2>
                </Paper>
            </Link>

            {
                matches === true
                ? 
                <Link to='/more' >
                <Paper className={classes.card}>
                    <AddCircleIcon className={classes.icon}/>
                    <h2>More</h2>
                </Paper>
            </Link>
            : 
            null
            }

            {
                matches === true
                ? 
                <Link to='/help' >
                    <Paper className={classes.card}>
                        <HelpIcon className={classes.icon}/>
                        <h2>Help</h2>
                    </Paper>
                </Link>
            : 
            null
            }

            
            
        </div>
    );
}

export default Home
