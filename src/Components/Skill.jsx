import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Formik,Form,Field,FieldArray } from 'formik';
import {TextField} from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import {Typography,Card,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";

const initialValues = {
    skill: ['']
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '96px 300px',
        backgroundColor: '#CAD0CD',
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(0),
            borderRadius: theme.spacing(0),
            },
        },
    Skill: {
        margin: '10px 30px',
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(0),
            marginBottom: theme.spacing(1),
            
        },
    },
    inp: {
        margin: 'auto',
        marginTop: 20,
        marginBottom: theme.spacing(5),
        width: theme.spacing(65),
        [theme.breakpoints.only('xs')]: {
            width: theme.spacing(25),
        },
    },
    heading: {
        marginTop: 20,
    },
    submitButton: {
        margin: 30,
        marginLeft: 190,
        [theme.breakpoints.only('xs')]: {
            margin: 10,
            marginLeft: 19,
        },
    },
    addButton: {
        margin: 30,
        marginRight: 210,
        [theme.breakpoints.only('xs')]: {
            margin: 10,
            marginRight: 21,
        },
    },
    subButton: {
        width: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    extra: {
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(-3),
            visibility: 'hidden'
        },
    }
}));

const Skill = (props) =>  {

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
            Skills
            </Typography>

            <CardContent>
            <Formik initialValues={initialValues}
                onSubmit= {onSubmit}
            >
                {
                    formik => {
                        return(
                            <Form>
                            <div>
                            <FieldArray name='skill' >
                                {
                                    (fieldArrayProps) => {
                                        const { form,push,remove } = fieldArrayProps
                                        const { values } = form
                                        const { skill } = values
                                        return <div>
                                            {
                                                skill.map((skill, index) => (
                                                    <div key={index}>
                                                        <Card className={classes.Skill}>
                                                        <Typography variant="h5" gutterBottom className={classes.heading}>
                                                        Skill {index+1}
                                                        </Typography>
                                                        <div className={classes.inp}>
                                                        <Field
                                                        name={`skill[${index}]`} 
                                                        component={TextField} 
                                                        fullWidth
                                                        id={`skill${index}`}
                                                        />
                                                        </div>
                                                        { index > 0 && (
                                                        <Button 
                                                        className={classes.subButton}
                                                        type='button' 
                                                        onClick={() => remove(index)}
                                                        variant="contained" 
                                                        color="primary"
                                                        fullWidth
                                                        > <DeleteIcon />
                                                        </Button>
                                                        )}
                                                        </Card>
                                                    </div>
                                                    
                                                ))
                                            }
                                            <Grid container spacing={8}>
                                            <Grid item xs={6} sm={6}>
                                            <Button 
                                                id='add'
                                                className={classes.addButton}
                                                variant="contained" 
                                                color="primary"
                                                type='button' 
                                                onClick={() => push('')}>
                                                 + 
                                            </Button>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                            <Button 
                                            id='submit'
                                            className={classes.submitButton} 
                                            variant="contained" 
                                            color="primary" 
                                            type='submit'
                                            >Submit</Button>
                                            </Grid>
                                            </Grid>
                                        </div>
                                    }
                                }
                            </FieldArray>
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

export default Skill