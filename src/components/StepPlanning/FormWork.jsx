import { Autocomplete, TextField, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import React, { useState } from "react";

const regimes = [
  { descricao: "20 horas" },
  { descricao: "30 horas" },
  { descricao: "40 horas" },
];

function FormWork() {
  const [regime, setRegime] = useState({ descricao: "40 horas" });
  const handleChangeRegime = (event, values) => {
    setRegime(values);
  };

  return (
    <form>
      <CardHeader title="3.1. Planejamento Interno - Força de Trabalho" />

      <Typography
        variant="subtitle1"
        align="justify"
        color="text.secondary"
        component="p"
      >
        O servidor deverá indicar abaixo eventuais afastamentos, licenças,
        férias ou outros tipos de ausências, se houver, que já estejam previstos
        para os próximos três meses contados a partir do envio das informações à
        SGP (Art 7º da IN SGP/UNILAB nº 8 de 04 de dezembro de 2020).
      </Typography>
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
            label="Tipo de Ausência"
            variant="outlined"
            margin="normal"
          />
        )}
      />
      <TextField
        id="cargoEfetivo"
        label="Tipo"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />

      <TextField
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        id="dadosGestao"
        label="Início"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        id="dadosGestao"
        label="Fim"
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </form>
  );
}
export default FormWork;
