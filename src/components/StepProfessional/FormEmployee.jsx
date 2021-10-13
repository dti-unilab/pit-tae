import { Autocomplete, Button, TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";

const regimes = [
  { descricao: "20 horas" },
  { descricao: "30 horas" },
  { descricao: "40 horas" },
];

function FormEmployee(props) {
  const { onSubmitForm } = props;
  const [periodo] = useState({
    descricao: "Outubro a Dezembro de 2021",
  });
  const [regime, setRegime] = useState({ descricao: "40 horas" });

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

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}
export default FormEmployee;
