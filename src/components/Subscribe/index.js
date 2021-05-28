import React from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";

const Subscribe = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" align="center">
        <Typography variant="h4" gutterBottom color="primary">
          Subscreibe For New Features
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <Box className={classes.form}>
          <input type="email" placeholder="Enter Email" required />
          <Button
            className={classes.btnSubscribe}
            variant="contained"
            color="default"
          >
            Subscribe now
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default Subscribe;
