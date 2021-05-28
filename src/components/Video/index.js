import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { FaPlay } from "react-icons/fa";
import Dialog from "../Dialog";
const Video = () => {
  const classes = useStyles();
  const [dialogToggle, setDialogToggle] = React.useState(false);
  return (
    <section className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={1} alignItems="center">
          <Grid item md={6} xl={6}>
            <Box
              position="relative"
              style={{ cursor: "pointer" }}
              onClick={() => setDialogToggle(true)}
            >
              <img
                className={classes.img}
                src="http://zcube.in/bingle/img/bg/video-img.png"
                alt="group people"
              />
              <div className={classes.icon}>
                <FaPlay />
              </div>
            </Box>
          </Grid>
          <Grid item md={6} xl={6}>
            <Box className={classes.video}>
              <Typography variant="h4" color="primary" gutterBottom>
                Build The App That Everyonee Love
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum
                accumsan finibus. Cras placerat lacinia mi, ac dictum ante.
                Donec libero enim, tincidunt sit amet venenatis id, maximus eu
                quam.{" "}
              </Typography>
              <ul className={classes.list}>
                <li>
                  <Box display="flex" alignItems="center">
                    <img
                      style={{ marginRight: "8px" }}
                      src="http://zcube.in/bingle/img/icon/vs-icon.png"
                      alt="icon"
                    />
                    <Typography variant="subtitle2" color="secondary">
                      Suspendisse vitae varius diam, a vulputate urna.
                    </Typography>
                  </Box>
                </li>
                <li>
                  <Box display="flex" alignItems="center">
                    <img
                      style={{ marginRight: "8px" }}
                      src="http://zcube.in/bingle/img/icon/vs-icon.png"
                      alt="icon"
                    />
                    <Typography variant="subtitle2" color="secondary">
                      Suspendisse vitae varius diam, a vulputate urna.
                    </Typography>
                  </Box>
                </li>
                <li>
                  <Box display="flex" alignItems="center">
                    <img
                      style={{ marginRight: "8px" }}
                      src="http://zcube.in/bingle/img/icon/vs-icon.png"
                      alt="icon"
                    />
                    <Typography variant="subtitle2" color="secondary">
                      Suspendisse vitae varius diam, a vulputate urna.
                    </Typography>
                  </Box>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Dialog dialogToggle={dialogToggle} setDialogToggle={setDialogToggle} />
    </section>
  );
};

export default Video;
