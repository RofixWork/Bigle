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
    "& .MuiTypography-subtitle2:first-of-type": {
      width: "40%",
      marginBottom: 40,
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  testimonial: {
    backgroundColor: "white",
    boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "30px 15px",
    display: "flex",
    borderRadius: 10,
    position: "relative",
    "& .MuiTypography-h6": {
      fontWeight: 700,
    },
    "& .MuiTypography-subtitle2": {
      color: "#7D4196",
    },
    "& .MuiTypography-subtitle1": {
      fontSize: "14px",
    },
    "& img": {
      transform: "translateY(-20px)",
      width: "90px",
      height: "90px",
      [theme.breakpoints.down("xs")]: {
        width: "60px",
        height: "60px",
        transform: "translateY(-10px)",
      },
    },
  },
  quote: {
    position: "absolute",
    top: 35,
    right: 25,
    width: "55px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

export default useStyles;
