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
        },
    Skill: {
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
        backgroundColor: 'Green',
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
                                                        // <Tooltip title="Delete" aria-label="delete">
                                                        <Button 
                                                        className={classes.subButton}
                                                        type='button' 
                                                        onClick={() => remove(index)}
                                                        variant="contained" 
                                                        color="primary"
                                                        fullWidth
                                                        > <DeleteIcon />
                                                        </Button>
                                                        // </Tooltip>
                                                        )}
                                                        </Card>
                                                    </div>
                                                    
                                                ))
                                            }
                                            <Grid container spacing={8}>
                                            <Grid item xs={12} sm={6}>
                                            {/* <Tooltip title="Add Skill" aria-label="add"> */}
                                            <Button 
                                                id='add'
                                                className={classes.addButton}
                                                variant="contained" 
                                                color="primary"
                                                type='button' 
                                                onClick={() => push('')}>
                                                 + 
                                            </Button>
                                            {/* </Tooltip> */}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <Button 
                                            id='submit'
                                            className={classes.submitButton} 
                                            variant="contained" 
                                            color="primary" 
                                            type='submit'
                                            >Save</Button>
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

export default Skill