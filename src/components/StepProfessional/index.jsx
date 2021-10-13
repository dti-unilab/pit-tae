import { Button, Autocomplete, TextField } from "@material-ui/core";
import React, { useState } from "react";
import FormUnity from "./FormUnity";
import FormEmployee from "./FormEmployee";
import FormBoss from "./FormBoss";
import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function StepProfessional(props) {
  const { onSubmitForm } = props;
  const [stage, setStage] = useState(0);

  const formStage = [<FormUnity />, <FormEmployee />, <FormBoss />];

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>{formStage[stage]}</CardContent>
        </Card>
      </Box>
    </>
  );
}
export default StepProfessional;
