import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    name: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(3),
        fontSize: theme.spacing(2),
    },
    text :{
        padding: theme.spacing(3),
        fontSize: theme.spacing(2),
        background: 'white',
    },
    noInput: {
        background: 'white',
    },
    cv :{
        marginTop: theme.spacing(1), 
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
    },
    subHeading: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(1),
        fontSize: theme.spacing(2.2),
        margin : theme.spacing(0.8),
        //marginRight : theme.spacing(30)
    },
    left: {
        marginLeft : theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'inherit',
    },
    edu: {
        fontWeight: 'bold',
        marginLeft : theme.spacing(1),
        textAlign: 'left',
    },
    subEdu : {
        marginLeft : theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'inherit',
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
    }
  }));

function Show(props) {
    const classes = useStyles();

    if(props.data.name === undefined){
        return (
            <div className={classes.noInput}>
            <Typography className={classes.text}>Please fill Personal Details form to view CV.</Typography>
            <Link to='/personal'>
            <Button variant="contained" color="primary" >Fill Personal Details Form</Button>
            </Link>
            </div>
        )
    }

    else {
        const {name,email,phone,address,linkedIn} = props.data
        return (
            <div>
                <Card className={classes.cv}>
                <CardContent>
                <Typography className={classes.name}>{name.toUpperCase()}</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={7}>       
                        {
                            props.data.objective !== undefined ?
                            <div>
                                <Typography className={classes.subHeading}>OBJECTIVE</Typography>
                                <Typography className={classes.left}>{props.data.objective}</Typography>
                            </div>
                            :
                            null
                        }

                    {
                        props.data.edu !== undefined ? 
                        <div>
                        <Typography className={classes.subHeading}>EDUCATION</Typography>
                        <ul>
                            {   
                                props.data.edu.map((education,id) => 
                                    <div key={id}>
                                    <li className={classes.edu}>{education.school}</li>
                                    <h5 className={classes.subEdu}>{education.year}</h5>
                                    <h5 className={classes.subEdu}>{education.course}</h5>
                                    <h5 className={classes.subEdu}>{education.grade}</h5>
                                    </div>
                                )
                            }
                        </ul>
                        </div>
                        :
                        null
                    }

                    {
                        props.data.projects !== undefined ? 
                        <div>
                        <Typography className={classes.subHeading}>PROJECTS</Typography>
                        <ul>
                            {   
                                props.data.projects.map((project,id) => 
                                    <div key={id}>
                                    <li className={classes.edu}>{project.title}</li>
                                    <h5 className={classes.subEdu}>{project.desc}</h5>
                                    </div>
                                )
                            }
                        </ul>
                        </div>
                        :
                        null
                    }

                    {
                        props.data.experience !== undefined ? 
                        <div>
                        <Typography className={classes.subHeading}>EXPERIENCE</Typography>
                        <ul>
                            {   
                                props.data.experience.map((experience,id) => 
                                    <div key={id}>
                                    <li className={classes.edu}>{experience.company}</li>
                                    <h5 className={classes.subEdu}>{experience.title}</h5>
                                    <h5 className={classes.subEdu}>{experience.from} - {experience.to}</h5>
                                    <h5 className={classes.subEdu}>{experience.details}</h5>
                                    </div>
                                )
                            }
                        </ul>
                        </div>
                        :
                        null
                    }

                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <Typography className={classes.subHeading}>CONTACT</Typography>
                    <Typography className={classes.left}>{email}</Typography>
                    <Typography className={classes.left}>{phone}</Typography>
                    <Typography className={classes.left}>{address}</Typography>
                    {
                        linkedIn 
                        !== '' ? 
                        <Typography className={classes.left}>
                        {linkedIn}
                        </Typography>
                        : null
                    }

                    {
                        props.data.skill !== undefined ? 
                        <div>
                        <Typography className={classes.subHeading}>SKILLS</Typography>
                        <ul>
                            {   
                                props.data.skill.map((skill,id) => 
                                    <li key={id} className={classes.left}>{skill}</li>
                                )
                            }
                        </ul>
                        </div>
                        :
                        null
                    }
                    
                    </Grid>
                </Grid>
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default Show
