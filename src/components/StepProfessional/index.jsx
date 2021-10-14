import React, { useState } from "react";
import FormUnity from "./FormUnity";
import FormEmployee from "./FormEmployee";
import FormBoss from "./FormBoss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function StepProfessional(props) {
  const { onSubmitForm } = props;
  const [stage, setStage] = useState(0);

  function handleSubmitUnity() {
    console.log("Submeteu UNITY");
    setStage(1);
  }

  function handleSubmitEmployee() {
    console.log("Submeteu Employee");
    setStage(2);
  }

  function handleSubmitBoss() {
    onSubmitForm();
    setStage(0);
  }

  const formStage = [
    <FormUnity onSubmitForm={handleSubmitUnity} />,
    <FormEmployee onSubmitForm={handleSubmitEmployee} />,
    <FormBoss onSubmitForm={handleSubmitBoss} />,
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
export default StepProfessional;
