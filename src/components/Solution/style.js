import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    width: "100%",
    "& .MuiTypography-h4": {
      fontSize: 34,
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
    "& .MuiTypography-subtitle2": {
      margin: "15px 0",
      fontWeight: 400,
      lineHeight: 2,
    },
  },
  img: {
    width: "100%",
    marginTop: "-180px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-140px",
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-140px",
      width: "80%",
    },
  },
  bgSolution: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  btnPlayStore: {
    background:
      "transparent linear-gradient(90deg, #7D4196 0%, #FF3494 100%) 0% 0% no-repeat padding-box",
    color: "white",
    padding: "10px 20px",
    fontWeight: 500,

    "&:hover": {
      background:
        "transparent linear-gradient(90deg, #FF3494 0%, #7D4196 100%) 0% 0% no-repeat padding-box",
      boxShadow: "3px 4px 25px #c63a9580",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  btnAppStore: {
    color: "#ff3494",
    borderTop: "1px solid #ff3494",
    borderBottom: "1px solid #ff3494",
    borderRight: "1px solid #ff3494",
    background: "white",
    fontWeight: 500,

    "&:hover": {
      background: "white",
      border: "none",
      boxShadow: "3px 4px 25px #c63a9580",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));
export default useStyles;
