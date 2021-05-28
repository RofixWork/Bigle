import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    "& .MuiTypography-h4": {
      fontSize: 34,
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
  },
}));
export default useStyles;
