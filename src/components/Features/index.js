import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { data } from "./data";
import { Box } from "@material-ui/core";

const Features = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h4" color="primary" gutterBottom>
          Our Features
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
      </Container>

      {/* ---------------sections------------------ */}
      <Box marginTop="50px">
        <Container maxWidth="xl">
          <Grid container>
            {data.map((dt) => {
              return (
                <Grid key={dt.id} item md={4} xl={4}>
                  <Box margin="20px 0" className={classes.box} align="center">
                    <img src={dt.image} alt="" />
                    <Typography variant="h6" color="primary">
                      {dt.title}
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                      {dt.desc}
                    </Typography>
                    <Typography variant="button">{dt.number}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* ---------------sections------------------ */}
    </section>
  );
};

export default Features;
