import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    name: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(3),
        fontSize: theme.spacing(2),
    },
    text :{
        padding: theme.spacing(3),
        fontSize: theme.spacing(2),
        background: 'white',
    },
    noInput: {
        background: 'white',
    },
    cv :{
        marginTop: theme.spacing(1), 
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
    },
    subHeading: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(1),
        fontSize: theme.spacing(2),
        margin : theme.spacing(0.4)
    }
  }));

function Show(props) {
    const classes = useStyles();
    console.log(props.parsonalInfo)

    if(props.parsonalInfo.name === undefined){
        return (
            <div className={classes.noInput}>
            <Typography className={classes.text}>Please fill Personal Details form to view CV.</Typography>
            <Link to='/personal'>
            <Button variant="contained" color="primary" >Fill Personal Details Form</Button>
            </Link>
            </div>
        )
    }

    else {
        const {name,email,phone,address,linkedIn} = props.parsonalInfo
        return (
            <div>
                <Card className={classes.cv}>
                <CardContent>
                <Typography className={classes.name}>{name.toUpperCase()}</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={7}>       
                        
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <Typography className={classes.subHeading}>CONTACT</Typography>
                    <Typography >{email}</Typography>
                    <Typography>{phone}</Typography>
                    <Typography>{address}</Typography>
                    <Typography>
                    {linkedIn}
                    </Typography>
                    </Grid>
                </Grid>
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default Show
