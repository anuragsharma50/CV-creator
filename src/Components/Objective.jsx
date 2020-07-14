import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Formik,Form,Field } from 'formik';
import {TextField} from 'formik-material-ui';
import {Typography,Card,Button} from '@material-ui/core';

const initialValues = {
    objective: ''
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '96px 300px',
        },
    inp: {
        margin: 'auto',
        marginTop: 20,
        marginBottom: theme.spacing(5),
        width: theme.spacing(75),
    },
    heading: {
        marginTop: 20,
    },
    submitButton: {
        margin: 30,
        marginLeft: 530,
        backgroundColor: 'Green',
    },
}));

const Objective = (props) =>  {

    const onSubmit = (values) => {
        // props.returnVal(values)
        console.log(values)
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
    <Typography>
            .
    </Typography>
    </>
  );
}

export default Objective