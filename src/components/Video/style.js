import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    backgroundColor: "#f9f7ff",
    "& .MuiTypography-h4": {
      fontSize: 38,
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
    "& .MuiTypography-subtitle2": {
      width: "90%",
    },
  },
  video: {
    paddingLeft: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  list: {
    marginTop: "2rem",
    "& li": {
      margin: "15px 0",
    },
  },
  img: {
    width: "100%",
    display: "block",
    borderRadius: "5px",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: 50,
  },
}));
export default useStyles;
