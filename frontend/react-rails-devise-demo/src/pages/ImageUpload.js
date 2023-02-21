import { Card, CardActionArea, CardContent, Fab, Grid } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { withStyles } from "@mui/styles";
import React, { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white"
  },
  input: {
    display: "none"
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center"
  },
  button: {
    color: blue[900],
    margin: 10
  },
  secondaryButton: {
    color: "gray",
    margin: 10
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "default"
  },

  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  searchInput: {
    marginLeft: 8,
    flex: 1
  },
  searchIconButton: {
    padding: 10
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

const ImageUploadCard = (props) => {
  const [mainState, setMainState] = useState('initial')
  const [selectedFile, setSelectedFile] = useState(null)
  
  const handleUploadClick = event => {
    var file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file)
    reader.onloadend = (e) => {      
      setSelectedFile([reader.result])
    }
    setMainState("uploaded")
    props.saveImage(event.target.files[0])
    setSelectedFile(event.target.files[0])
  };

  const renderInitialState = () => {
    const { classes } = props;

    return (
      <CardContent>
        <Grid container justify="center" alignItems="center">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
          />
          <label htmlFor="contained-button-file">
            <Fab component="span" className={classes.button}>
              <AddPhotoAlternateIcon />
            </Fab>
          </label>
        </Grid>
      </CardContent>
    );
  }

  const renderUploadedState = () => {
    const { classes } = props;

    return (
      <React.Fragment>
        <CardActionArea onClick={imageResetHandler}>
          <img
            width={200}
            alt="user"
            className={classes.media}
            src={selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  const imageResetHandler = () => {
    setMainState("initial")
    setSelectedFile(null)
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card className={props.cardName}>
        {
          (mainState === "initial" && renderInitialState()) ||
          (mainState === "uploaded" && renderUploadedState())
        }
      </Card>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
