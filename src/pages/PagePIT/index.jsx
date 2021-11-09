import { Step, StepLabel, Stepper } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import api from "../../services/api";
import StepProfessional from "../../components/StepProfessional";
import StepPlanning from "../../components/StepPlanning";
import StepAuth from "../../components/StepAuth";
import PDFGenerate from "../../components/PDFGenerate";

function PagePIT() {

  const [dataProfessional, setDataProfessional] = useState({});
  const [afastamentos, setAfastamentos] = useState([]);
  const [up, forceUpdate] = useState(0);
  const [user, setUser] = useState({});
  const [atividades, setAtividades] = useState([]);
  const [stage, setStage] = useState(0);
  const [disabledLogin, setDisabledLogin] = useState(false);
  const [regimeDeTrabalho, setRegimeDeTrabalho] = useState("Remoto integral");
  const [erros, setErros] = useState({ login: { valid: true, text: "" } });

  const formStep = [
    <StepAuth
      disabledLogin={disabledLogin}
      onSubmitForm={handleLogin}
      erros={erros}
    />,
    <StepProfessional onSubmitForm={handleProfessional} dataProfessional={dataProfessional} />,
    <StepPlanning
      onAddAfastamento={handleAddAfastamento}
      onAddAtividade={handleAddAtividade}
      handleRemoveAtividade={handleRemoveAtividade}
      handleRemoveAfastamento={handleRemoveAfastamento}
      regime={regimeDeTrabalho}
      handleRegime={handleChangeRegime}
      afastamentos={afastamentos}
      atividades={atividades}
      onFinishPlanning={handleFinishPlanning}
      data={dataProfessional}
    />,
    <PDFGenerate
      back={handleBack}
      allData={{ user, atividades, afastamentos, dataProfessional, regimeDeTrabalho }}
    />,
  ];
  function handleChangeRegime(event) {
    setRegimeDeTrabalho(event.target.value);
  }
  function handleRemoveAfastamento(itemID) {
    let arrayData = afastamentos;
    let dataIndex = arrayData.findIndex((elemento) => elemento.id === itemID);
    arrayData.splice(dataIndex, 1);
    setAfastamentos(arrayData);
    forceUpdate(up + 1);
  }

  function handleAddAfastamento(novoAfastamento) {
    let lista = afastamentos;
    lista.push(novoAfastamento);
    setAfastamentos(lista);
    forceUpdate(up + 1);
  }

  function handleAddAtividade(novaAtividade) {
    let lista = atividades;
    lista.push(novaAtividade);
    setAtividades(lista);
    forceUpdate(up + 1);
  }

  function handleRemoveAtividade(itemID) {
    let arrayData = atividades;
    let dataIndex = arrayData.findIndex((elemento) => elemento.id === itemID);
    arrayData.splice(dataIndex, 1);
    setAtividades(arrayData);
    forceUpdate(up + 1);
  }

  function handleProfessional(data) {
    setDataProfessional(data);
    setStage(2);
  }
  function handleFinishPlanning() {
    setStage(3);
  }
  function handleBack() {
    setStage(1);
  }

  async function handleLogin(userAuth) {
    if (userAuth.login.length === undefined || userAuth.login.length < 3) {
      setErros({
        login: {
          valid: false,
          text: "Seu login deve ter no mínimo 3 caracteres!",
        },
      });
      return;
    }
    if (userAuth.senha.length === undefined || userAuth.senha.length < 3) {
      setErros({
        login: {
          valid: false,
          text: "Sua senha deve ter no mínimo 3 caracteres!",
        },
      });
      return;
    }
    setDisabledLogin(true);
    try {
      let response = await api.post("/authenticate", userAuth);
      setUser(response.data);
      setStage(1);
      setErros({ login: { valid: true, text: "" } });
    } catch (error) {
      setErros({
        login: { valid: false, text: "Você errou a senha, tente outra vez!" },
      });
      setDisabledLogin(false);
    }
  }

  return (
    
    <Container maxWidth={stage === 3 ? "md" : "sm"}>

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
          <StepLabel>Dados da Unidade e Servidor</StepLabel>
        </Step>
        <Step>
          <StepLabel>Planejamento, Atividades e Metas</StepLabel>
        </Step>
      </Stepper>
      <br />
      {formStep[stage]}
    </Container>
  );
}

export default PagePIT;
