import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url('http://zcube.in/bingle/img/bg/pink-header-bg.png')`,
    backgroundSize: "65%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0",
    transform: "translate3d(0,0,0)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "80%",
    },
  },
  img: {
    marginLeft: "-180px",
    marginTop: 50,
    "@media (max-width:1171px)": {
      marginTop: "-100px",
      marginLeft: "-191px",
      width: 750,
    },
    "@media (max-width:991px)": {
      display: "none",
    },
  },
  title: {
    fontSize: 70,
    marginBottom: 22.5,
    fontWeight: "700",
    whiteSpace: "no-wrape",
    "& span": {
      color: "#ff3494",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: 16,
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  btnRead: {
    padding: "10px 35px",
    color: "white",
    textTransform: "capitalize",
    fontSize: "1rem",
    borderRadius: "25px",
    boxShadow: "3px 4px 25px #c63a9580",

    background:
      "transparent linear-gradient(90deg, #7D4196 0%, #FF3494 100%) 0% 0% no-repeat padding-box",
    marginTop: "2rem",
    "&:hover": {
      background:
        "transparent linear-gradient(90deg, #FF3494 0%, #7D4196 100%) 0% 0% no-repeat padding-box",
      boxShadow: "3px 4px 25px #c63a9580",
    },
  },
}));

export default useStyles;
