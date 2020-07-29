import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Formik,Form,Field } from 'formik';
import {TextField} from 'formik-material-ui';
import {Typography,Card,Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const initialValues = {
    objective: ''
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '96px 300px',
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(0),
            borderRadius: theme.spacing(0),
        },
        },
    inp: {
        margin: 'auto',
        marginTop: 20,
        marginBottom: theme.spacing(5),
        width: theme.spacing(75),
        [theme.breakpoints.only('xs')]: {
            width: theme.spacing(35),
            marginBottom: 30,
            height: theme.spacing(45),
        },
    },
    heading: {
        marginTop: 20,
    },
    submitButton: {
        margin: 30,
        marginLeft: 530,
        backgroundColor: 'Green',
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(3),
            margin: 'auto'
        },
    },
    extra: {
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(-3),
        },
    }
}));

const Objective = (props) =>  {

    let history = useHistory();

    const onSubmit = (values) => {
        props.returnVal(values)
        history.push('/show')
    }

  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <Typography variant="h4" gutterBottom className={classes.heading}>
            Objectives
            </Typography>

            <CardContent>
            <Formik initialValues={initialValues}
                onSubmit= {onSubmit}
            >
                {
                    formik => {
                        return(
                            <Form>         
                                <div className={classes.inp}>
                                    <Field
                                    id='obj'
                                    name='objective' 
                                    component={TextField}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    variant = "outlined"
                                     />
                                    <Button 
                                    className={classes.submitButton} 
                                    variant="contained" 
                                    color="primary" 
                                    type='submit'
                                    >Save</Button>
                                </div>
                        </Form>
                        )
                    }
                }
            </Formik>
        </CardContent>
    </Card>
    <Typography className={classes.extra}>
            .
    </Typography>
    </>
  );
}

export default Objective