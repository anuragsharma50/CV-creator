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
    projects: [{
        title:'',
        desc:'',
    }]
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '50px 300px',
        backgroundColor: '#CAD0CD',
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(0),
            borderRadius: theme.spacing(0),
            
        },
        },
    projects: {
        margin: '10px 30px',
        [theme.breakpoints.only('xs')]: {
            margin: theme.spacing(-1),
            borderRadius: theme.spacing(0),
            marginBottom: theme.spacing(2),
        },
    },
    inp: {
        margin: 'auto',
        marginTop: 10,
        marginBottom: 35,
        width: theme.spacing(74),
        [theme.breakpoints.only('xs')]: {
            width: theme.spacing(30),
            marginBottom: 30,
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
            marginBottom: 60,
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
            visibility: 'hidden',
        },
    }
}));

const Projects = (props) =>  {

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
            Projects
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
                            <FieldArray name='projects' >
                                {
                                    (fieldArrayProps) => {
                                        const { form,push,remove } = fieldArrayProps
                                        const { values } = form
                                        const { projects } = values
                                        return <div>
                                            {
                                                projects.map((projects, index) => (
                                                    <div key={index}>
                                                        <Card className={classes.projects}>
                                                        <Typography variant="h5" gutterBottom className={classes.heading}>
                                                        Projects {index+1}
                                                        </Typography>
                                                        <div className={classes.inp}>
                                                        <Field
                                                        id={`title${index}`}
                                                        name={`projects[${index}].title`} 
                                                        component={TextField}
                                                        label="Title" 
                                                        fullWidth
                                                        />
                                                        </div>
                                                        <div className={classes.inp}>
                                                        <Field
                                                        id={`desc${index}`}
                                                        name={`projects[${index}].desc`} 
                                                        component={TextField}
                                                        label="Description"
                                                        multiline
                                                        rows={4}
                                                        fullWidth
                                                        variant = "outlined"
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
                                                className={classes.addButton}
                                                variant="contained" 
                                                color="primary"
                                                type='button' 
                                                onClick={() => push({course:'',school:'',grade:'',year:''})}>
                                                 + 
                                            </Button>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                            <Button 
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

export default Projects