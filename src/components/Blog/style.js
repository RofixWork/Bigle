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
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    "& .MuiTypography-body2": {
      fontWeight: "600",
      fontSize: "15px",
    },
    "& .MuiTypography-caption": {
      fontWeight: "500",
      fontSize: "13px",
    },
  },
  content: {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "3px 4px 25px #0000001a",
  },
  date: {
    background:
      "transparent linear-gradient(90deg, #7D4196 0%, #FF3494 100%) 0% 0% no-repeat padding-box",
    padding: "5px 20px",
    width: "fit-content !important",
    color: "white",
    borderRadius: "20px",
    fontSize: 14,
    textTransform: "uppercase",
  },
  title: {
    margin: "20px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  desc: {
    fontSize: "14px",
    lineHeight: 2,
    marginBottom: "20px",
  },
  imgAuthor: {
    borderRadius: "50%",
    border: "2px solid #ffffff",
    background: "#D7D7D7 0% 0% no-repeat padding-box",
  },
}));

export default useStyles;
