import { Autocomplete, Button, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";

const listCampus = [
  { name: "Liberdade" },
  { name: "Palmares" },
  { name: "Auroras" },
  { name: "Malês" },
];
const periodos = [{ description: "Novembro a Janeiro de 2021" }];

function FormUnity(props) {
  const { onSubmitForm, dadosUnidade } = props;
  const [unidadeMaxima, setUnidadeMaxima] = useState(dadosUnidade.unidadeMaxima === undefined ? "" : dadosUnidade.unidadeMaxima);
  const [unidadeExercicio, setUnidadeExercicio] = useState(dadosUnidade.unidadeExercicio === undefined ? "" : dadosUnidade.unidadeExercicio);
  const [horario, setHorario] = useState(dadosUnidade.horario === undefined ? "" : dadosUnidade.horario);
  const [horarioExercicio, setHorarioExercicio] = useState(dadosUnidade.horarioExercicio === undefined ? "" : dadosUnidade.horarioExercicio);
  const [periodo, setPeriodo] = useState(dadosUnidade.periodo === undefined ? periodos[0] : dadosUnidade.periodo);
  const [campus, setCampus] = useState(dadosUnidade.campus === undefined ? listCampus[0] : dadosUnidade.campus);

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
        onSubmitForm({unidadeMaxima, horario, unidadeExercicio, campus, periodo, horarioExercicio});
      }}
    >
      <CardHeader title="2.1. Dados da Unidade" />
      <TextField
        value={unidadeMaxima}
        onChange={(event) => {
          setUnidadeMaxima(event.target.value);
        }}
        id="unidadeMaxima"
        label="Unidade Máxima"
        variant="outlined"
        margin="normal"
        fullWidth
        required={true}
      />
      <TextField
        value={horario}
        onChange={(event) => {
          setHorario(event.target.value);
        }}
        id="horarioFuncionamento"
        label="Horário de Funcionamento"
        variant="outlined"
        margin="normal"
        fullWidth
        required={true}
      />
      <TextField
        value={unidadeExercicio}
        onChange={(event) => {
          setUnidadeExercicio(event.target.value);
        }}
        id="unidadeExercicio"
        label="Unidade de Exercício"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />
      <TextField
        value={horarioExercicio}
        onChange={(event) => {
          setHorarioExercicio(event.target.value);
        }}
        id="horarioFuncionamento2"
        label="Horário de Funcionamento da Unidade de Exercício"
        variant="outlined"
        margin="normal"
        fullWidth
        required={true}
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
