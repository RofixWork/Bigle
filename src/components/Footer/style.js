import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "60px 0 30px 0",
    color: "white",
    position: "relative",
    backgroundImage: `url('http://zcube.in/bingle/img/bg/f-bg.png')`,
    backgroundSize: "auto",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  },
  content: {
    "& img": {
      marginBottom: "5px",
    },
    "& ul": {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      "& li": {
        margin: "0 8px",
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  icon: {
    color: "#FF3494",
    fontSize: "20px",
  },
  list: {
    "& li": {
      margin: "10px 0",
    },
  },
}));
export default useStyles;
