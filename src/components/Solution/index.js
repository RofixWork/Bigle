import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Box } from "@material-ui/core";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Solution = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item md={6} xl={6}>
            <div className={classes.bgSolution}>
              <img
                className={classes.img}
                src="http://zcube.in/bingle/img/bg/mobile.png"
                alt="image solution section"
              />
            </div>
          </Grid>
          <Grid item md={6} xl={6}>
            <Typography gutterBottom variant="h4" color="primary">
              Easy And Perfect Solution For Your Business App
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Aliquam aliquet purus a est consequat lobortis. Etiam vehicula
              suscipit purus, eget ullamcorper augue blandit vitae. Ut eu
              euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar
              turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed
              fermentum a lacus bibendum convallis.
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Consequat purus aliquet a est aliquam lobortis. Etiam vehicula
              suscipit purus, eget ullamcorper augue blandit vitae. Ut eu
              euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar
              turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed
              fermentum a lacus bibendum convallis.
            </Typography>
            <Box marginTop="30px">
              <ButtonGroup variant="contained" color="default">
                <Button
                  startIcon={<FaGooglePlay />}
                  className={classes.btnPlayStore}
                >
                  Available On Play Store
                </Button>
                <Button
                  startIcon={<FaAppStoreIos />}
                  className={classes.btnAppStore}
                >
                  App Store
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Solution;
