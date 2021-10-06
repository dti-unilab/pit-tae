import { Alert, Step, StepLabel, Stepper } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import FormLogin from "../components/FormLogin";
import { DataContext } from "../services/DataContext";
import api from "../services/api";
import FormProfessional from "../components/FormProfessional";

function PagePIT() {

  const [data, setData] = useState({});
  const [stage, setStage] = useState(0);
  const [disabledLogin, setDisabledLogin] = useState(false);
  const [erros, setErros] = useState({login:{valid:true, text:""}});
  const formStep = [
    <>
      {erros.login.valid ? "" : <Alert severity="error">{erros.login.text}</Alert>}
      <FormLogin disabledLogin={disabledLogin} onSubmitForm={handleLogin} />
    </>,
   <>
   <FormProfessional onSubmitForm={handleProfessional} data={data}/>
   </>,
   <>
    Teste
   </>,
   <>
   Gerar PDF
   </>,
  ];

  async function handleLogin(user) {
    if(user.login.length === undefined || user.login.length < 3){
      setErros({login:{valid: false, text: "Seu login deve ter no mínimo 3 caracteres!"}});
      return;
    }
    if(user.senha.length === undefined || user.senha.length < 3){
      setErros({login:{valid: false, text: "Sua senha deve ter no mínimo 3 caracteres!"}});
      return;
    }
    setDisabledLogin(true);
    try {
      let response = await api.post("/authenticate", user);
      setData({user: response.data});
      setStage(1);
      setErros({login:{valid: true, text: ""}});
    } catch (error) {

      setErros({login:{valid: false, text: "Você errou a senha, tente outra vez!"}});
      setDisabledLogin(false);
    }
    
  }
  function handleProfessional(dataProfessional){
    console.log(dataProfessional);
    setStage(2);
  }
  return (
    
    <DataContext.Provider value={data}>
      <Container maxWidth="sm">
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
          Utilize o formulário abaixo para gerar o PIT.
        </Typography>
        <Stepper activeStep={stage} alternativeLabel>
          <Step>
            <StepLabel>Autenticação</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dados da Unidade/Servidor</StepLabel>
          </Step>
          <Step>
            <StepLabel>Planejamento Interno</StepLabel>
          </Step>
   
        </Stepper>
        <br />
         {formStep[stage]}
      </Container>
    </DataContext.Provider>
  );
}

export default PagePIT;
