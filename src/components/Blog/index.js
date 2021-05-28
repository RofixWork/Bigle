import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box, Divider } from "@material-ui/core";

const Blog = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h4" gutterBottom color="primary">
          Our Latest Blog & News
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
      </Container>
      <Box marginTop="40px">
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} xl={4}>
              <div className={classes.content}>
                <Box height="200px">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="http://zcube.in/bingle/img/blog/inner_b1.jpg"
                    alt="img news"
                  />
                </Box>
                <Box padding="40px 30px">
                  <Typography className={classes.date} variant="subtitle2">
                    25 May 2021
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="primary"
                  >
                    Making Distribut Product Team Work More With Monday
                  </Typography>
                  <Typography
                    className={classes.desc}
                    variant="subtitle2"
                    color="secondary"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisi cing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Divider />
                  <Box marginTop="20px" display="flex" alignItems="center">
                    <img
                      className={classes.imgAuthor}
                      src="http://zcube.in/bingle/img/blog/admin-img.png"
                      alt="img autohr"
                    />
                    <Box marginLeft="8px">
                      <Typography variant="body2" color="primary">
                        Jhon Abraham
                      </Typography>
                      <Typography variant="caption" color="secondary">
                        Author
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Grid>
            {/* two */}
            <Grid item xs={12} sm={6} md={4} xl={4}>
              <div className={classes.content}>
                <Box height="200px">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="http://zcube.in/bingle/img/blog/inner_b2.jpg"
                    alt="img news"
                  />
                </Box>
                <Box padding="40px 30px">
                  <Typography className={classes.date} variant="subtitle2">
                    25 May 2021
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="primary"
                  >
                    Monthly Web Development Upto Cost Of JavaScript Ethics
                  </Typography>
                  <Typography
                    className={classes.desc}
                    variant="subtitle2"
                    color="secondary"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisi cing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Divider />
                  <Box marginTop="20px" display="flex" alignItems="center">
                    <img
                      className={classes.imgAuthor}
                      src="http://zcube.in/bingle/img/blog/admin-img.png"
                      alt="img autohr"
                    />
                    <Box marginLeft="8px">
                      <Typography variant="body2" color="primary">
                        Jhon Abraham
                      </Typography>
                      <Typography variant="caption" color="secondary">
                        Author
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Grid>
            {/* three */}
            <Grid item xs={12} sm={6} md={4} xl={4}>
              <div className={classes.content}>
                <Box height="200px">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="http://zcube.in/bingle/img/blog/inner_b3.jpg"
                    alt="img news"
                  />
                </Box>
                <Box padding="40px 30px">
                  <Typography className={classes.date} variant="subtitle2">
                    25 May 2021
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="primary"
                  >
                    User Experience Psychology And Performance Smashing
                  </Typography>
                  <Typography
                    className={classes.desc}
                    variant="subtitle2"
                    color="secondary"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisi cing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Divider />
                  <Box marginTop="20px" display="flex" alignItems="center">
                    <img
                      className={classes.imgAuthor}
                      src="http://zcube.in/bingle/img/blog/admin-img.png"
                      alt="img autohr"
                    />
                    <Box marginLeft="8px">
                      <Typography variant="body2" color="primary">
                        Jhon Abraham
                      </Typography>
                      <Typography variant="caption" color="secondary">
                        Author
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Blog;
