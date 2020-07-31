import React from 'react';
import {Card,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        width: 1200,
        margin: 'auto',
        marginTop: theme.spacing(7), 
        marginBottom: theme.spacing(49.3),
        fontStyle: 'bold',
    },
    heading: {
        marginTop: 20,
        
    },
    extra: {
        marginBottom: 42,
    }
}))

function Add() {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <Typography variant="h4" gutterBottom className={classes.heading}>
                    Content will be added later.
                </Typography>
            </Card>
            <Typography className={classes.extra}>
                    .
            </Typography>
        </div>
    )
}

export default Add
