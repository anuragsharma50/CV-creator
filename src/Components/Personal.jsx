import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Formik,Form,Field } from 'formik';
import * as Yup from 'yup';
import {TextField} from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import {Typography,Card,Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const initialValues = {
    name:'',
    address:'',
    email:'',
    phone:'',
    linkedIn:'',
    // gitHub:'',
    // fb:'',
    // dob:'',
    // website:'',
    // tw:'',
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid Email Format'),
    phone: Yup.number().required('Required').typeError("That doesn't look like a phone number")   
  .integer("A phone number can't include a decimal point")
})

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: theme.spacing(7), 
        marginRight: theme.spacing(38),
        marginBottom: theme.spacing(10.4),
        marginLeft: theme.spacing(38),
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(0),
            borderRadius: theme.spacing(0),
          },
        },
    inp: {
        margin: 'auto',
        marginTop: 20,
        width: theme.spacing(74),
        [theme.breakpoints.only('xs')]: {
            width: theme.spacing(30),
            marginTop: 10,
        },
    },
    heading: {
        marginTop: 20,
        [theme.breakpoints.only('xs')]: {
            fontSize: theme.spacing(4.2),
        },
    },
    button: {
        margin: 36,
        marginLeft: theme.spacing(70),
        marginRight: theme.spacing(7),
        [theme.breakpoints.only('xs')]: {
            marginLeft: theme.spacing(10),
        },
    },
    grids: {
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(2.7),
            marginBottom: theme.spacing(2.7),
        },
    },
    extra: {
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(-3),
        },
    }
}));

const Personal = (props) =>  {

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
            Personal Details
            </Typography>

            <CardContent>
            <Formik initialValues={initialValues}
                onSubmit= {onSubmit}
                validationSchema={validationSchema}
            >
                {
                    formik => {
                        return(
                            <Form>
                                <div className={classes.inp}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={12} sm={6}>
                                            <Field 
                                            component={TextField}
                                            label='Name'
                                            type='text'
                                            id='name'
                                            name='name'
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field 
                                            component={TextField}
                                            type='text'
                                            id='email'
                                            name='email'
                                            label='Email'
                                            fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.inp}>
                                <Field
                                className={classes.grids}
                                component={TextField}
                                    label="Address"
                                    name='address'
                                    id='address'
                                    fullWidth
                                />
                                </div>
                                <div className={classes.inp}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={12} sm={6}>
                                            <Field 
                                            component={TextField}
                                            type='text'
                                            id='phone'
                                            name='phone'
                                            label='Phone'
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field 
                                            component={TextField}
                                            type='text'
                                            id='linkedIn'
                                            name='linkedIn'
                                            label='LinkedIn'
                                            fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Button 
                                id="submit"
                                className={classes.button} 
                                variant="contained" 
                                color="primary" 
                                type='submit'
                                >Submit</Button>
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

export default Personal