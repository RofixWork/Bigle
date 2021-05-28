import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    "& .MuiTypography-h4": {
      fontWeight: 700,
    },
    "& .MuiTypography-h6": {
      fontWeight: 600,
      margin: "1rem 0 0.5rem 0 ",
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: 400,
      width: "80%",
    },
    "& .MuiTypography-button": {
      width: "50px",
      height: "50px",
      display: "block",
      borderRadius: "50%",
      color: "#ff3494",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1.5rem",
      fontSize: "22px",
      border: "1px solid #ff3494",
    },
  },
  box: {
    padding: "0 12px",
    "&:hover": {
      "& .MuiTypography-h6": {
        color: "#ff3494",
      },
      "& .MuiTypography-button": {
        background:
          "transparent linear-gradient(90deg, #7D4196 0%, #FF3494 100%) 0% 0% no-repeat padding-box",
        color: "white",
      },
    },
  },
}));

export default useStyles;
