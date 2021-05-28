import React from "react";
import useStyles from "./style";
import { Dialog as DialogMUI, Box } from "@material-ui/core";
import ReactPlayer from "react-player";
const Dialog = ({ dialogToggle, setDialogToggle }) => {
  const classes = useStyles();
  return (
    <DialogMUI
      open={dialogToggle}
      onClose={() => setDialogToggle(false)}
      maxWidth="md"
      fullWidth={true}
      className={classes.root}
    >
      <Box>
        <ReactPlayer
          width="100%"
          url="https://youtu.be/7e90gBu4pas"
          height="450px"
        />
      </Box>
    </DialogMUI>
  );
};

export default Dialog;
