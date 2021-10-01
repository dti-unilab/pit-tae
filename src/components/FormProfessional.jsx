import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

const periodos = [{ descricao: "Outubro a Dezembro de 2021" }];
const regimes = [
  { descricao: "20 horas" },
  { descricao: "30 horas" },
  { descricao: "40 horas" },
];

function FormProfessional(props) {
  const { onSubmitForm } = props;
  const [periodo, setPeriodo] = useState({ descricao: "Outubro a Dezembro de 2021" });
  const [regime, setRegime] = useState( { descricao: "40 horas" });


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

<Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Nome: {props.data.user.name}
      </Typography>
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
          />
        )}
      />
      <br />
      <Autocomplete
        id="regime"
        name="regime"
        options={regimes}
        getOptionLabel={(option) => option.descricao}
        onChange={handleChangeRegime}
        value={regime}
        fullWidth
        renderInput={(params) => (
          <TextField
            required
            {...params}
            label="Regime de Trabalho"
            variant="outlined"
          />
        )}
      /><br/>

      <Button type="submit" variant="contained" color="primary">
        Avançar
      </Button>
    </form>
  );
}
export default FormProfessional;
