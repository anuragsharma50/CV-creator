import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    name: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(6),
        fontSize: theme.spacing(2),
        [theme.breakpoints.only('xs')]: {
            fontSize: theme.spacing(0.66),
            padding: theme.spacing(2.4),
        },
    },
    text :{
        padding: theme.spacing(3),
        fontSize: theme.spacing(2),
        background: 'white',
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(1),
            fontSize: theme.spacing(0.66),
        },
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
        [theme.breakpoints.only('xs')]: {
            margin: 'auto',
            width: 320,
            height: 452.6,
            borderRadius: 0, 
        },
    },
    subHeading: {
        color: 'white',
        backgroundColor: 'black',
        padding: theme.spacing(1),
        fontSize: theme.spacing(2.2),
        margin : theme.spacing(0.8),
        marginRight : theme.spacing(5),
        marginTop : theme.spacing(2),
        width: 'max-content',
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(0.33),
            fontSize: theme.spacing(0.73),
            margin : theme.spacing(0.266),
            marginRight : theme.spacing(1),
            marginTop : theme.spacing(0.66),    
        },
    },
    left: {
        marginLeft : theme.spacing(2),
        marginBottom : theme.spacing(0.8),
        textAlign: 'left',
        fontWeight: 'inherit',
        [theme.breakpoints.only('xs')]: {
            marginLeft : theme.spacing(0.66),
            marginBottom : theme.spacing(0.266),
            fontSize: theme.spacing(1),
        },
    },
    edu: {
        fontWeight: 'bold',
        marginLeft : theme.spacing(1),
        textAlign: 'left',
        [theme.breakpoints.only('xs')]: {
            marginLeft : theme.spacing(-2.33),
            fontSize: theme.spacing(0.8),
        },
    },
    subEdu : {
        marginLeft : theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'inherit',
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
        fontSize: theme.spacing(2),
        [theme.breakpoints.only('xs')]: {
            marginLeft : theme.spacing(-2.33),
            marginBottom: theme.spacing(0.166),
            marginTop: theme.spacing(0.166),
            fontSize: theme.spacing(0.66),
        },
    },
    icons : {
        marginTop: theme.spacing(0.8),
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(-1),      
        },
    },
    iconContainer: {
        height: 29,
        [theme.breakpoints.only('xs')]: {
            height: 15,      
        },
    },
    iconContainerLi: {
        marginTop: 29, 
        [theme.breakpoints.only('xs')]: {
            marginTop: 11.3,      
        },
    },
    icon: {
        fontSize: 19,
        [theme.breakpoints.only('xs')]: {
            fontSize: 8,
        },
    },
    downloadButton: {
        margin: 30,
        backgroundColor: 'Green',
        marginLeft: 190,
        [theme.breakpoints.only('xs')]: {
            margin: 10,
            marginLeft: 19,
            fontSize: theme.spacing(1),
        },
    },
    moreButton: {
        margin: 30,
        marginRight: 210,
        [theme.breakpoints.only('xs')]: {
            margin: 10,
            marginRight: 21,
            fontSize: theme.spacing(1),
        },
    },
    buttons: {
        width: 794,
        margin:'auto',
        [theme.breakpoints.only('xs')]: {
            width: 300
        },
    },
    noText: {
        margin: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        fontSize: theme.spacing(2),
    },
    skill: {
        marginLeft: -10,
        marginBottom : theme.spacing(0.8),
        textAlign: 'left',
        fontWeight: 'inherit',
        [theme.breakpoints.only('xs')]: {
            marginLeft : theme.spacing(-3),
            marginBottom : theme.spacing(0.266),
            fontSize: theme.spacing(1),
        },
    }
  }));