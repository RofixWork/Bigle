import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { Container, useTheme, useMediaQuery } from "@material-ui/core";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const classes = useStyles();
  const [changeBg, setChangeBg] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const change__Backround__Navbar = () => {
    if (window.scrollY > 20) {
      setChangeBg(true);
    } else setChangeBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", change__Backround__Navbar);

    return () => {
      window.removeEventListener("scroll", change__Backround__Navbar);
    };
  }, []);
  return (
    <header className={`${classes.navbar} ${changeBg && "active"}`}>
      <Container maxWidth="xl">
        <div className={classes.navbarContent}>
          <img src="http://zcube.in/bingle/img/logo/logo.svg" alt="logo" />
          {!mobile ? (
            <nav>
              <a href="/#">About Us</a>
              <a href="/#">Features</a>
              <a href="/#">ScreenShort</a>
              <a href="/#">Other</a>
              <a href="/#">Blog</a>
              <a href="/#">Contact</a>
              <a href="/#">Download</a>
            </nav>
          ) : (
            <div className={classes.icon}>
              <FaBars />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
