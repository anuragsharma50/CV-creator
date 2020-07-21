import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';

const useStyles = makeStyles((theme) => ({
    name: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(6),
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
        margin:'auto',
        marginTop: theme.spacing(1), 
        marginBottom: theme.spacing(1),
        width: 794,
        height: 1123,
        backgroundColor: 'white',
    },
    subHeading: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(1),
        fontSize: theme.spacing(2.2),
        margin : theme.spacing(0.8),
        marginRight : theme.spacing(5),
        marginTop : theme.spacing(2),
    },
    left: {
        marginLeft : theme.spacing(2),
        marginBottom : theme.spacing(0.8),
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
        marginTop: theme.spacing(0.5),
        fontSize: theme.spacing(2)
    },
    icon : {
        marginTop: theme.spacing(0.7)
    },
    downloadButton: {
        margin: 30,
        backgroundColor: 'Green',
        float: 'right'
    },
    moreButton: {
        margin: 30,
        float: 'left'
    },
    buttons: {
        width: 794,
        margin:'auto'
    }
  }));

function Show(props) {

    let history = useHistory();

    const handleMore = () => {
      history.push('/')
    }
  
    const handleDownload = () => {
        const domElement = document.getElementById("all");
        html2canvas(domElement,{scrollY: -window.scrollY})
        .then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        var pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG",-1.2,0);
        pdf.save(`${new Date().toISOString()}.pdf`);
        });
    }

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
                <Card className={classes.cv} id="all">
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
                    <Grid container spacing={0}>
                    <Grid item xs={12} sm={2}>
                        
                    <div className={classes.icon}>
                    <Typography> <AlternateEmailIcon style={{ fontSize: 18 }} /> </Typography>
                    <Typography> <PhoneIcon style={{ fontSize: 18 }} /> </Typography>
                    <Typography> <HomeIcon style={{ fontSize: 18, marginBottom: 45 }} /> </Typography>
                    {
                        linkedIn 
                        !== '' ? 
                        <Typography>
                        <LinkedInIcon style={{ fontSize: 18 }} />
                        </Typography>
                        : null
                    }
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={10}>
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
                    </Grid>
                    </Grid>

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

                <Grid container spacing={0} className={classes.buttons} >
                    <Grid item xs={12} sm={6} >
                        <Button 
                        variant="contained"  
                        color="primary"
                        className={classes.moreButton}
                        onClick={handleMore}
                        >Add More</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button 
                        variant="contained"
                        className={classes.downloadButton}
                        onClick={handleDownload}
                        >Download</Button>
                    </Grid>
                </Grid>

                <Typography>
                    .
                </Typography>
            </div>
        )
    }
}

export default Show
