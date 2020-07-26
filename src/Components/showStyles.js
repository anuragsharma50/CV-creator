import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
        marginTop: theme.spacing(0.9)
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