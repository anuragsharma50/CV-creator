import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    position: 'absolute',
    margin: theme.spacing(-2),
    color: 'white',
  },
  show: {
    position: 'absolute',
    margin: theme.spacing(-2.1),
    //marginLeft: theme.spacing(25),
    color: 'white',
    textDecoration: 'none',
  },
  showIcon: {
    fontSize: theme.spacing(5),   
  },
  text: {
    position: 'absolute',
    marginTop: theme.spacing(-6),
    marginLeft: theme.spacing(5)
  }
}));

function Header() {
  const classes = useStyles();

return (
  <div>
    <AppBar position="static"  color='secondary'>
    <Toolbar>
    <Grid container spacing={6}>
      <Grid item xs={12} sm={10}> 
      <Link to='/' >      
        <Typography  variant="h6" className={classes.title} id='home'>
            CV Creator
        </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Link to='/show' className={classes.show} id='show'> 
        <VisibilityIcon className={classes.showIcon} />
        <Typography className={classes.text}>Show CV</Typography>
      </Link>
      </Grid>
    </Grid>
    </Toolbar>
    </AppBar>
  </div>
)}

export default Header
