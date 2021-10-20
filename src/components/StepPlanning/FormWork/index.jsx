import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";


const tiposAusencias = [
  { descricao: "Afastamento" },
  { descricao: "Licença" },
  { descricao: "Férias" },
  { descricao: "Outros tipos de ausências previstas em Lei" },
];

function FormWork(props) {
  const { onSubmitForm } = props;
  const [tipoAusencia, setTipoAusencia] = useState(null);
  const [especificar, setEspecificar] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const handleChangeTipoAusencia = (event, values) => {
    setTipoAusencia(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const novoAfastamento = {
          id: Date.now(),
          tipoAusencia,
          especificar,
          inicio,
          fim,
        };
        onSubmitForm(novoAfastamento);
        setTipoAusencia(null);
        setEspecificar("");
        setInicio("");
        setFim("");
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
        options={tiposAusencias}
        getOptionLabel={(option) => option.descricao}
        onChange={handleChangeTipoAusencia}
        value={tipoAusencia}
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
        value={especificar}
        onChange={(event) => {
          setEspecificar(event.target.value);
        }}
        id="especificar"
        label="Especificar"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />

      <TextField
        value={inicio}
        onChange={(event) => {
          setInicio(event.target.value);
        }}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required={true}
        id="dataInicio"
        label="Início"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={fim}
        onChange={(event) => {
          setFim(event.target.value);
        }}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required={true}
        id="dataFim"
        label="Fim"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<AddCircleIcon />}
      >
        Adicionar
      </Button>
    </form>
  );
}
export default FormWork;
