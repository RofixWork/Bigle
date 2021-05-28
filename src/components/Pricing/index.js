import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import { Box, Grid, Button } from "@material-ui/core";
import { FaAngleRight } from "react-icons/fa";
const Pricing = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" align="center">
        <Typography gutterBottom variant="h4" color="primary">
          Our Pricing Plans
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
      </Container>
      <Box marginTop="40px">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className={classes.head}>
                <Typography variant="h6">Beginner</Typography>
                <div className={classes.headPrice}>
                  <sup>
                    <span>$</span>
                  </sup>
                  <span>15</span>
                  <small>/Monthly</small>
                </div>
                <Typography variant="h6">I have a dream</Typography>
                <ul className={classes.list}>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      1000+ projets
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      No transaction fees
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      Unlimited Storage
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      5 Download
                    </Typography>
                  </li>
                </ul>
                <Button
                  className={classes.btnStart}
                  variant="contained"
                  color="default"
                >
                  start now
                </Button>
              </div>
            </Grid>
            {/* two */}
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className={classes.head}>
                <Typography variant="h6">Starter</Typography>
                <div className={classes.headPrice}>
                  <sup>
                    <span>$</span>
                  </sup>
                  <span>15</span>
                  <small>/Monthly</small>
                </div>
                <Typography variant="h6">I have a dream</Typography>
                <ul className={classes.list}>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      1000+ projets
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      No transaction fees
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      Unlimited Storage
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      5 Download
                    </Typography>
                  </li>
                </ul>
                <Button
                  className={classes.btnStart}
                  variant="contained"
                  color="default"
                >
                  start now
                </Button>
              </div>
            </Grid>
            {/* three */}
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className={classes.head}>
                <Typography variant="h6">Professionl</Typography>
                <div className={classes.headPrice}>
                  <sup>
                    <span>$</span>
                  </sup>
                  <span>18</span>
                  <small>/Monthly</small>
                </div>
                <Typography variant="h6">I have a dream</Typography>
                <ul className={classes.list}>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      1000+ projets
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      No transaction fees
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      Unlimited Storage
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      5 Download
                    </Typography>
                  </li>
                </ul>
                <Button
                  className={classes.btnStart}
                  variant="contained"
                  color="default"
                >
                  start now
                </Button>
              </div>
            </Grid>
            {/* four */}
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <div className={classes.head}>
                <Typography variant="h6">Power Plan</Typography>
                <div className={classes.headPrice}>
                  <sup>
                    <span>$</span>
                  </sup>
                  <span>25</span>
                  <small>/Monthly</small>
                </div>
                <Typography variant="h6">I have a dream</Typography>
                <ul className={classes.list}>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      1000+ projets
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      No transaction fees
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      Unlimited Storage
                    </Typography>
                  </li>
                  <li>
                    <FaAngleRight className={classes.icon} />
                    <Typography variant="body2" color="secondary">
                      5 Download
                    </Typography>
                  </li>
                </ul>
                <Button
                  className={classes.btnStart}
                  variant="contained"
                  color="default"
                >
                  start now
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Pricing;
