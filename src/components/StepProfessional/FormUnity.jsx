import { Autocomplete, Button, TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import { CardActions } from "@mui/material";

const listaCampus = [
  { nome: "Liberdade" },
  { nome: "Palmares" },
  { nome: "Auroras" },
  { nome: "Malês" },
];
const periodos = [{ descricao: "Outubro a Dezembro de 2021" }];

function FormUnity(props) {
  const { onSubmitForm } = props;
  const [periodo, setPeriodo] = useState({
    descricao: "Outubro a Dezembro de 2021",
  });
  const [regime] = useState({ descricao: "40 horas" });
  const [campus, setCampus] = useState({ nome: "Liberdade" });

  const handleChangeCampus = (event, values) => {
    setCampus(values);
  };
  const handleChangePeriodo = (event, values) => {
    setPeriodo(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ periodo, regime });
      }}
    >
      <TextField
        id="unidadeMaxima"
        label="Unidade Máxima"
        variant="outlined"
        margin="normal"
        fullWidth
        required={true}
      />
      <TextField
        id="horarioFuncionamento"
        label="Horário de Funcionamento"
        variant="outlined"
        margin="normal"
        fullWidth
        required={true}
      />
      <TextField
        id="unidadeExercicio"
        label="Unidade de Exercício"
        variant="outlined"
        margin="normal"
        required={true}
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

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}
export default FormUnity;
