import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className={classes.content}>
                <img
                  src="http://zcube.in/bingle/img/logo/w_logo.png"
                  alt="footer img"
                />
                <Typography style={{ width: "90%" }} variant="body2">
                  Sed ut perspiciatis unde om is nerror sit voluptatem accustium
                  dolorem tium totam rem aperam quae.
                </Typography>
                <ul>
                  <li>
                    <FaFacebook className={classes.icon} />
                  </li>
                  <li>
                    <FaInstagram className={classes.icon} />
                  </li>
                  <li>
                    <FaTwitter className={classes.icon} />
                  </li>
                  <li>
                    <FaLinkedin className={classes.icon} />
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <Typography variant="h6">Company News</Typography>
              <ul className={classes.list}>
                <li>Partners</li>
                <li>About Us</li>
                <li>Carrer</li>
                <li>Reviews</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3} xl={3}>
              <Typography variant="h6">Useful Links</Typography>
              <ul className={classes.list}>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Project</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
