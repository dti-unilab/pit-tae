import { Button } from "@material-ui/core";
import FormActivity from "./FormActivity";
import FormGoal from "./FormGoal";
import FormWork from "./FormWork";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function StepPlanning(props) {
  const { onSubmitForm } = props;
  const [stage, setStage] = useState(0);

  function handleSubmitWork() {
    console.log("Submeteu UNITY");
    setStage(1);
  }

  function handleSubmitActivity() {
    console.log("Submeteu Employee");
    setStage(2);
  }

  function handleSubmitGoal() {
    onSubmitForm();
    setStage(0);
  }

  const formStage = [
    <FormWork onSubmitForm={handleSubmitWork} />,
    <FormActivity onSubmitForm={handleSubmitActivity} />,
    <FormGoal onSubmitForm={handleSubmitGoal} />,
  ];

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
export default StepPlanning;
