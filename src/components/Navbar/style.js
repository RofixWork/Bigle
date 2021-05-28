import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "80px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    transition: "all .4s ease-in-out",
    "&.active": {
      backgroundColor: "#190a32",
      transition: "all .4s ease-in-out",
      height: "85px",
    },
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& nav": {
      "& a": {
        color: "white",
        margin: "0 10px",
        fontWeight: 500,
        "&:last-child": {
          backgroundColor: "white",
          padding: "8px 30px",
          color: "#333",
          borderRadius: "20px",
          fontSize: "16px",
        },
      },
    },
  },
  icon: {
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
  },
}));

export default useStyles;
