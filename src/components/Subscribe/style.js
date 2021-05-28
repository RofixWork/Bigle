import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    padding: "60px 0",
    backgroundImage: `url('http://zcube.in/bingle/img/bg/subscribe-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#f9f7ff",
    "& .MuiTypography-h4": {
      fontSize: 38,
      fontWeight: 700,
      color: "white",
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
    "& .MuiTypography-subtitle2": {
      width: "70%",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "40px",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    "& input": {
      padding: "10px 32px",
      width: "100%",
      borderRadius: 30,
      border: "2px solid white",
      outline: "none",
      backgroundColor: "transparent",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      fontSize: "1rem",
      "&::placeholder": {
        color: "white",
        fontSize: "1rem",
      },
    },
  },
  btnSubscribe: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "white",
    color: "#190a32",
    padding: "12px 32px",
    borderRadius: "30px",
    fontWeight: 600,
    textTransform: "capitalize",
    transition: "0.2s",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#ff3494",
      color: "white",
      transition: " 0.2s",
      boxShadow: "none",
      border: "1px solid white",
    },
  },
}));

export default useStyles;
