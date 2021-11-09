import { Container, Typography } from "@mui/material";
import React from "react";
import { ReactVideo } from "reactjs-media";
import videoTutorial from "../../assets/video/PITTAE.mp4";
import posterTutorial from "../../assets/img/poster-tutorial.png";

function PageTutorial() {
  return (
    <Container maxWidth={"md"}>
      <br />
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Plano Individual de Trabalho (PIT)
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Tutorial
      </Typography>
      <ReactVideo
        src={videoTutorial}
        poster={posterTutorial}
        primaryColor="#3b0304"
        // other props
      />
    </Container>
  );
}

export default PageTutorial;
