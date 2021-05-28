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
    "& .MuiTypography-subtitle2": {
      width: "70%",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  },
  head: {
    backgroundColor: "white",
    width: "100%",
    position: "relative",
    padding: "15px 15px",
    border: "3px solid #e9369447",
    borderRadius: 5,
    textAlign: "center",
    margin: "10px 0",
    "& .MuiTypography-h6": {
      color: "#7D4196",
      fontSize: "28px",
      fontWeight: "500",
      "&:nth-of-type(1)": {
        marginBottom: "10px",
      },
    },
  },
  headPrice: {
    marginBottom: 10,
    "& sup": {
      "& span": {
        color: "#ff3494",
        fontSize: "25px",
        fontWeight: 500,
        transform: "translateY(-22px)",
        display: "inline-block",
        marginRight: "5px",
      },
    },
    "& span:nth-child(2)": {
      fontSize: "60px",
      fontWeight: 600,
      color: "#ff3494",
    },
    "& small": {
      fontSize: "16px",
      fontWeight: 500,
      color: "#ff3494",
      dipslay: "inline-block",
      marginLeft: "5px",
    },
  },
  list: {
    paddingLeft: 10,
    padding: "15px 0",
    "& li": {
      margin: "15px 0",
      display: "flex",
      alignItems: "center",
    },
  },
  icon: {
    color: "#ff3494",
    border: "1px solid #ff3494",
    borderRadius: "50%",
    marginRight: 8,
  },
  btnStart: {
    padding: "10px 35px",
    color: "white",
    textTransform: "capitalize",
    fontSize: "1rem",
    borderRadius: "25px",
    boxShadow: "3px 4px 25px #c63a9580",
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    right: "0",
    background:
      "transparent linear-gradient(90deg, #7D4196 0%, #FF3494 100%) 0% 0% no-repeat padding-box",
    "&:hover": {
      background:
        "transparent linear-gradient(90deg, #FF3494 0%, #7D4196 100%) 0% 0% no-repeat padding-box",
      boxShadow: "3px 4px 25px #c63a9580",
    },
  },
}));
export default useStyles;
