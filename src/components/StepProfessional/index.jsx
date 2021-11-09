import React, { useState } from "react";
import FormUnity from "./FormUnity";
import FormEmployee from "./FormEmployee";
import FormBoss from "./FormBoss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function StepProfessional(props) {
  const { onSubmitForm, dataProfessional } = props;
  const [dadosUnidade, setDadosUnidade] = useState(
    dataProfessional.dadosUnidade === undefined
      ? {}
      : dataProfessional.dadosUnidade
  );
  const [dadosServidor, setDadosServidor] = useState(
    dataProfessional.dadosServidor === undefined
      ? {}
      : dataProfessional.dadosServidor
  );
  const dadosChefe =  dataProfessional.dadosChefe === undefined ? {} : dataProfessional.dadosChefe;
  const [stage, setStage] = useState(0);

  function handleSubmitUnity(data) {
    setDadosUnidade(data);
    setStage(1);
  }

  function handleSubmitEmployee(data) {
    setDadosServidor(data);
    setStage(2);
  }

  function handleSubmitBoss(data) {
    onSubmitForm({ dadosUnidade, dadosServidor, dadosChefe : data });
    setStage(0);
  }

  const formStage = [
    <FormUnity onSubmitForm={handleSubmitUnity} dadosUnidade={dadosUnidade} />,
    <FormEmployee
      onSubmitForm={handleSubmitEmployee}
      dadosServidor={dadosServidor}
    />,
    <FormBoss onSubmitForm={handleSubmitBoss} dadosChefe={dadosChefe} />,
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
