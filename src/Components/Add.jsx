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
}))

function Add() {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <Typography variant="h4" gutterBottom className={classes.heading}>
                    To Maintain four column in each row we just added this box,You can go back by clicking on CV creator on the Header
                </Typography>
            </Card>
            <Typography>
                    .
            </Typography>
        </div>
    )
}

export default Add
