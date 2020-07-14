import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Formik,Form,Field,FieldArray } from 'formik';
import {TextField} from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import {Typography,Card,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const initialValues = {
    edu: [{
        course:'',
        school:'',
        grade:'',
        year:''
    }]
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '50px 300px',
        backgroundColor: '#CAD0CD',
        },
    edu: {
        margin: '10px 30px',
    },
    inp: {
        margin: 'auto',
        marginTop: 10,
        marginBottom: 35,
        width: theme.spacing(74),
    },
    heading: {
        marginTop: 20,
    },
    submitButton: {
        margin: 30,
        marginLeft: 190,
    },
    addButton: {
        margin: 30,
        marginRight: 210,
    },
    subButton: {
        width: theme.spacing(8),
        marginBottom: theme.spacing(4),
    }
}));

const Education = (props) =>  {

    const onSubmit = (values) => {
        // props.returnVal(values)
        console.log(values)
    }


  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <Typography variant="h4" gutterBottom className={classes.heading}>
            Education
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
                            <FieldArray name='edu' >
                                {
                                    (fieldArrayProps) => {
                                        const { form,push,remove } = fieldArrayProps
                                        const { values } = form
                                        const { edu } = values
                                        //console.log('Form Errors',form.errors)
                                        return <div>
                                            {
                                                edu.map((edu, index) => (
                                                    <div key={index}>
                                                        <Card className={classes.edu}>
                                                        <Typography variant="h5" gutterBottom className={classes.heading}>
                                                        Education {index+1}
                                                        </Typography>
                                                        <div className={classes.inp}>
                                                        <Grid container spacing={8}>
                                                        <Grid item xs={12} sm={8}>
                                                        <Field
                                                        name={`edu[${index}].course`} 
                                                        component={TextField}
                                                        label="Course/Degree" 
                                                        fullWidth
                                                        />
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Field                                                         
                                                        name={`edu[${index}].grade`} 
                                                        component={TextField} 
                                                        label="Grade/Score"
                                                        fullWidth
                                                        />
                                                        </Grid>
                                                        </Grid>
                                                        </div>
                                                        <div className={classes.inp}>
                                                        <Grid container spacing={8}>
                                                        <Grid item xs={12} sm={8}>  
                                                        <Field 
                                                        name={`edu[${index}].school`} 
                                                        component={TextField} 
                                                        label="School/University"
                                                        fullWidth
                                                        />
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        <Field 
                                                        name={`edu[${index}].year`} 
                                                        component={TextField} 
                                                        label="Year"
                                                        />
                                                        </Grid>
                                                        </Grid>
                                                        </div>
                                                        { index > 0 && (
                                                        <Tooltip title="Delete" aria-label="delete">
                                                        <Button 
                                                        className={classes.subButton}
                                                        type='button' 
                                                        onClick={() => remove(index)}
                                                        variant="contained" 
                                                        color="primary"
                                                        fullWidth
                                                        > <DeleteIcon />
                                                        </Button>
                                                        </Tooltip>
                                                        )}
                                                        </Card>
                                                    </div>
                                                    
                                                ))
                                            }
                                            <Grid container spacing={8}>
                                            <Grid item xs={12} sm={6}>
                                            <Tooltip title="Add Education" aria-label="add">
                                            <Button 
                                                className={classes.addButton}
                                                variant="contained" 
                                                color="primary"
                                                type='button' 
                                                onClick={() => push({course:'',school:'',grade:'',year:''})}>
                                                 + 
                                            </Button>
                                            </Tooltip>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
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
    <Typography>
            .
    </Typography>
    </>
  );
}

export default Education