import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    "& .MuiTypography-h4": {
      fontSize: 38,
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
    "& .MuiTypography-subtitle1": {
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
    },
    "& .MuiTypography-subtitle2": {
      width: "93%",
    },
  },
  leftSide: {
    paddingLeft: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  img: {
    width: "90%",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
