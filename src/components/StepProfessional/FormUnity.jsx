import { Autocomplete, Button, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";


const listCampus = [
  { name: "Liberdade" },
  { name: "Palmares" },
  { name: "Auroras" },
  { name: "Malês" },
];
const periodos = [{ description: "Outubro a Dezembro de 2021" }];

function FormUnity(props) {
  const { onSubmitForm } = props;
  const [periodo, setPeriodo] = useState(periodos[0]);
  
  const [campus, setCampus] = useState(listCampus[0]);

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
        onSubmitForm();
      }}
    >
      <CardHeader title="2.1. Dados da Unidade" />
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
        options={listCampus}
        getOptionLabel={(option) => option.name}
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
        getOptionLabel={(option) => option.description}
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