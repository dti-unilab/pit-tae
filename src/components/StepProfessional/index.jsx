import React, { useState } from "react";
import FormUnity from "./FormUnity";
import FormEmployee from "./FormEmployee";
import FormBoss from "./FormBoss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function StepProfessional(props) {
  const { onSubmitForm } = props;
  const [dadosUnidade, setDadosUnidade] = useState({});
  const [dadosProfessional, setDadosProfessional] = useState({});
  const [stage, setStage] = useState(0);

  function handleSubmitUnity(data) {
    setDadosUnidade(data);
    setStage(1);
  }

  function handleSubmitEmployee(data) {
    setDadosProfessional(data);
    setStage(2);
  }

  function handleSubmitBoss(data) {
    onSubmitForm({ dadosUnidade, dadosProfessional, dadosChefe: data });
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
