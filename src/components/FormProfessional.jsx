import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";

const listaCampus = [{nome: "Liberdade" }, {nome: "Palmares" }, {nome: "Auroras" },{nome: "Malês" }];
const periodos = [{ descricao: "Outubro a Dezembro de 2021" }];
const regimes = [
  { descricao: "20 horas" },
  { descricao: "30 horas" },
  { descricao: "40 horas" },
];

function FormProfessional(props) {
  const { onSubmitForm } = props;
  const [periodo, setPeriodo] = useState({
    descricao: "Outubro a Dezembro de 2021",
  });
  const [regime, setRegime] = useState({ descricao: "40 horas" });
  
  const [campus, setCampus] = useState({ nome: "Liberdade" });
  
  
  const handleChangeCampus = (event, values) => {
    setCampus(values);
  };
  const handleChangePeriodo = (event, values) => {
    setPeriodo(values);
  };
  const handleChangeRegime = (event, values) => {
    setRegime(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ periodo, regime });
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader title="Dados da Unidade" />

          <CardContent>
            <TextField
              id="unidadeMaxima"
              label="Unidade Máxima"
              variant="outlined"
              margin="normal"
              fullWidth
              required="true"
            />
            <TextField
              id="horarioFuncionamento"
              label="Horário de Funcionamento"
              variant="outlined"
              margin="normal"
              fullWidth
              required="true"
            />
            <TextField
              id="unidadeExercicio"
              label="Unidade de Exercício"
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
            />
            <Autocomplete
              id="campus"
              name="campus"
              options={listaCampus}
              getOptionLabel={(option) => option.nome}
              onChange={handleChangeCampus}
              value={campus}
              fullWidth
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Campus"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <Autocomplete
              id="periodo"
              name="periodo"
              options={periodos}
              getOptionLabel={(option) => option.descricao}
              onChange={handleChangePeriodo}
              value={periodo}
              fullWidth
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Período"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        <CardHeader title="Dados do Servidor" />
          <CardContent>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Nome: {props.data.user.name}
            </Typography>
            <TextField
              id="cargoEfetivo"
              label="Cargo Efetivo"
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
            />
            <Autocomplete
              id="cargaHoraria"
              name="cargaHoraria"
              options={regimes}
              getOptionLabel={(option) => option.descricao}
              onChange={handleChangeRegime}
              value={regime}
              fullWidth
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Carga Horária Semanal"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <TextField
              id="dadosGestao"
              label="Dados de Gestão(Se for o caso)"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </CardContent>

        </Card>
      </Box>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        <CardHeader title="Dados da Chefia Imediata" />
          <CardContent>
            
            <TextField
              id="nomeChefiaImediata"
              label="Nome"
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
            />
            <TextField
              id="cargoFuncaoChefia"
              label="Cargo de Direção/Função Gratificada"
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
            />
          </CardContent>

        </Card>
      </Box>

      
      <br/>
      <Button type="submit" variant="contained" color="primary">
        Avançar
      </Button>
    </form>
  );
}
export default FormProfessional;
