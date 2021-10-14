import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';



const absences = [
  { description: "Afastamento" },
  { description: "Licença" },
  { description: "Férias" },
  { description: "Outros tipos de ausências previstas em Lei" },
];

function FormWork(props) {
  const { onSubmitForm } = props;
  const [absence, setAbsence] = useState(absences[0]);
  const handleChangeAbsence = (event, values) => {
    setAbsence(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm();
      }}
    >
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
        options={absences}
        getOptionLabel={(option) => option.description}
        onChange={handleChangeAbsence}
        value={absence}
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
        label="Especificar"
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

      <Button type="submit" variant="contained" color="primary" endIcon={<AddCircleIcon />}>
        Adicionar
      </Button>
    </form>
  );
}
export default FormWork;
