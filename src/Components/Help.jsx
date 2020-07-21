import React from 'react'
import {Card,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import modiji from '../aatmanirbhar.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        width: 1200,
        margin: 'auto',
        marginTop: theme.spacing(3), 
        marginBottom: theme.spacing(1.5),
        fontStyle: 'bold',
    },
    heading: {
        marginTop: 10,
        
    },
    img: {
        marginTop: theme.spacing(3),
        height: theme.spacing(50),
        width: theme.spacing(65)
    }
}))

function Help() {

    const classes = useStyles();

    return (
        <div>
            <img src={modiji} alt="Aatmnirbhar Bano" className={classes.img}/>
            <Card className={classes.root}>
                
                <Typography variant="h2" gutterBottom className={classes.heading}>
                    Aatmnirbhar Bano
                </Typography>
            </Card>
            <Typography>
                    .
            </Typography>
        </div>
    )
}

export default Help
