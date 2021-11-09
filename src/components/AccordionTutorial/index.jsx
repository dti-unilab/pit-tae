import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactVideo } from "reactjs-media";
import videoTutorial from "../../assets/video/PITTAE.mp4";
import posterTutorial from "../../assets/img/poster-tutorial.png";

export default function AccordionTutorial() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tutorial</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactVideo
            src={videoTutorial}
            poster={posterTutorial}
            primaryColor="#3b0304"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
