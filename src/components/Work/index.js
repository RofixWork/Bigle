import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { data } from "./data";
const Work = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={1} alignItems="center">
          <Grid item md={6} xl={6}>
            <Typography variant="h4" color="primary" gutterBottom>
              How does This App Work?
              {data.map((dt) => {
                return (
                  <Box key={dt.id} margin="25px 0">
                    <Grid container alignItems="center">
                      <Grid item md={3} xl={3}>
                        <img src={dt.img} alt="" />
                      </Grid>
                      <Grid item md={9} xl={9}>
                        <Typography variant="h6" color="primary" gutterBottom>
                          {dt.title}
                        </Typography>
                        <Typography variant="subtitle2" color="secondary">
                          {dt.desc}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Typography>
          </Grid>
          <Grid item md={6} xl={6}>
            <img
              style={{ width: "90%" }}
              src="http://zcube.in/bingle/img/bg/app-work-img.png"
              alt="img"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Work;
