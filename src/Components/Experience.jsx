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
    experience: [{
        company:'',
        title:'',
        from:'',
        to:'',
        details:''
    }]
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '50px 300px',
        backgroundColor: '#CAD0CD',
        },
    experience: {
        margin: '10px 30px',
    },
    inp: {
        margin: 'auto',
        marginTop: 20,
        marginBottom: theme.spacing(5),
        width: theme.spacing(65),
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

const Experience = (props) =>  {

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
            Experience
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
                            <FieldArray name='experience' >
                                {
                                    (fieldArrayProps) => {
                                        const { form,push,remove } = fieldArrayProps
                                        const { values } = form
                                        const { experience } = values
                                        //console.log('Form Errors',form.errors)
                                        return <div>
                                            {
                                                experience.map((experience, index) => (
                                                    <div key={index}>
                                                        <Card className={classes.experience}>
                                                        <Typography variant="h5" gutterBottom className={classes.heading}>
                                                        Experience {index+1}
                                                        </Typography>
                                                        <div className={classes.inp}>
                                                        <Field
                                                        id={`name${index}`}
                                                        name={`experience[${index}].company`} 
                                                        component={TextField}
                                                        label="Company Name" 
                                                        fullWidth
                                                        />
                                                        </div>
                                                        <div className={classes.inp}>
                                                        <Field 
                                                        id={`title${index}`}                                                        
                                                        name={`experience[${index}].title`} 
                                                        component={TextField} 
                                                        label="Job Title"
                                                        fullWidth
                                                        />
                                                        </div>
                                                        <div className={classes.inp}>
                                                        <Grid container spacing={10}>
                                                        <Grid item xs={12} sm={6}>  
                                                        <Field 
                                                        id={`from${index}`}
                                                        name={`experience[${index}].from`} 
                                                        component={TextField} 
                                                        label="Start Date"
                                                        fullWidth
                                                        />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                        <Field 
                                                        id={`to${index}`}
                                                        name={`experience[${index}].to`} 
                                                        component={TextField} 
                                                        label="End Date"
                                                        fullWidth
                                                        />
                                                        </Grid>
                                                        </Grid>
                                                        <div className={classes.inp}>
                                                        <Field 
                                                        id={`details${index}`}
                                                        name={`experience[${index}].details`} 
                                                        component={TextField} 
                                                        label="Details"
                                                        fullWidth
                                                        />
                                                        </div>
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
                                            <Grid item xs={12} sm={6}>
                                            <Button 
                                                className={classes.addButton}
                                                variant="contained" 
                                                color="primary"
                                                type='button' 
                                                onClick={() => push({company:'',
                                                title:'',
                                                from:'',
                                                to:'',
                                                details:''})}>
                                                 + 
                                            </Button>
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

export default Experience