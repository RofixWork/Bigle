import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Banner = () => {
  const classes = useStyles();
  return (
    <section className={classes.banner}>
      <Container maxWidth="xl">
        <Grid container spacing={1} alignItems="center">
          <Grid item md={6} xl={6}>
            <Typography color="primary" className={classes.title} variant="h1">
              Best Mobile <br /> App <span>Showcase</span>
            </Typography>
            <Typography
              className={classes.desc}
              variant="subtitle1"
              color="secondary"
            >
              Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis
              massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex
              nunc.
            </Typography>
            <Button
              className={classes.btnRead}
              variant="contained"
              color="default"
            >
              read more
            </Button>
          </Grid>
          <Grid item md={6} xl={6}>
            <img
              className={classes.img}
              src="http://zcube.in/bingle/img/bg/mobile.png"
              alt="banner images"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
