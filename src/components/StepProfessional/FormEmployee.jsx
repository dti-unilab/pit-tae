import { Autocomplete, Button, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";

const regimes = [
  { description: "20 horas" },
  { description: "30 horas" },
  { description: "40 horas" },
];

function FormEmployee(props) {
  const { onSubmitForm } = props;
  const [regime, setRegime] = useState(regimes[2]);

  const handleChangeRegime = (event, values) => {
    setRegime(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm();
      }}
    >
      <CardHeader title="2.1. Dados do Servidor" />
      <TextField
        id="cargoEfetivo"
        label="Cargo Efetivo"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />
      <Autocomplete
        id="cargaHoraria"
        name="cargaHoraria"
        options={regimes}
        getOptionLabel={(option) => option.description}
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

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}
export default FormEmployee;
