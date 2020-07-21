import React from 'react'
import {Card,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        width: 1200,
        margin: 'auto',
        marginTop: theme.spacing(7), 
        marginBottom: theme.spacing(10),
        fontStyle: 'bold',
    },
    heading: {
        marginTop: 20,
        
    },
}))

function Help() {

    const classes = useStyles();

    return (
        <div>
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
