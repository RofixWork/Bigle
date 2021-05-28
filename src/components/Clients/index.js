import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";

const Clients = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="xl">
        <Typography gutterBottom variant="h4" color="primary">
          What Our Clients Say’s
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel
          scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat
          magna.
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <div className={classes.testimonial}>
              <img
                src="http://zcube.in/bingle/img/testimonial/testi_avatar.png"
                alt="img user"
              />
              <div>
                <Typography variant="h6" color="primary">
                  Mr Jone Dose
                </Typography>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle1" color="secondary">
                  Praesent fermentum nisl at ipsum fcilisis viverra elementum
                  accumsan finibus. Cras placerat lacinia mitincidunt sit amet
                  venenatis.
                </Typography>
              </div>
              <div className={classes.quote}>
                <img
                  src="http://zcube.in/bingle/img/bg/qutation.png"
                  alt="quote"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <div className={classes.testimonial}>
              <img
                src="http://zcube.in/bingle/img/testimonial/testi_avatar2.png"
                alt="img user"
              />
              <div>
                <Typography variant="h6" color="primary">
                  Mr Jone Dose
                </Typography>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle1" color="secondary">
                  Praesent fermentum nisl at ipsum fcilisis viverra elementum
                  accumsan finibus. Cras placerat lacinia mitincidunt sit amet
                  venenatis.
                </Typography>
              </div>
              <div className={classes.quote}>
                <img
                  src="http://zcube.in/bingle/img/bg/qutation.png"
                  alt="quote"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <div className={classes.testimonial}>
              <img
                src="http://zcube.in/bingle/img/testimonial/testi_avatar3.png"
                alt="img user"
              />
              <div>
                <Typography variant="h6" color="primary">
                  Mr Jone Dose
                </Typography>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle1" color="secondary">
                  Praesent fermentum nisl at ipsum fcilisis viverra elementum
                  accumsan finibus. Cras placerat lacinia mitincidunt sit amet
                  venenatis.
                </Typography>
              </div>
              <div className={classes.quote}>
                <img
                  src="http://zcube.in/bingle/img/bg/qutation.png"
                  alt="quote"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Clients;
