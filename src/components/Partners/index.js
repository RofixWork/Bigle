import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import CustomizedAccordions from "../Accordion";
import { Box } from "@material-ui/core";

const Partners = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={1} alignItems="center">
          <Grid item md={6} xl={6}>
            <div className={classes.imgContainer}>
              <img
                className={classes.img}
                src="http://zcube.in/bingle/img/icon/logos-icons.png"
                alt="img"
              />
            </div>
          </Grid>
          <Grid item md={6} xl={6}>
            <Box className={classes.leftSide}>
              <Typography variant="h4" gutterBottom color="primary">
                Designed & Worked By The Latest Partners
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                Duis non aliquet tellus, in mollis leo. Phasellus quis posuere
                dui. Nulla mauris purus, mattis eget sagittis at, accumsan sed
                leo.
              </Typography>
              <Box marginTop="30px">
                <CustomizedAccordions />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Partners;
