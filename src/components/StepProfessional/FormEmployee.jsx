import {
  Autocomplete,
  Button,
  CardHeader,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const regimes = [
  { description: "20 horas" },
  { description: "30 horas" },
  { description: "40 horas" },
];

function FormEmployee(props) {
  const { onSubmitForm } = props;
  const [regime, setRegime] = useState(regimes[2]);
  const [cargoEfetivo, setCargoEfetivo] = useState("");
  const [exerceGestao, setExerceGestao] = useState(true);

  const handleExerceGestao = (event) => {
    setExerceGestao(event.target.checked);
  };
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
        value={cargoEfetivo}
        onChange={(event) => {
          setCargoEfetivo(event.target.value);
        }}
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
      <FormControlLabel
        checked={exerceGestao}
        onChange={handleExerceGestao}
        inputProps={{ "aria-label": "controlled" }}
        control={<Switch />}
        label="Exerce Gestão"
      />
      <br />
      
      {exerceGestao ? (<>
      
        <TextField
        id="dadosGestao"
        label="Denominação de Gestão"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="dadosGestao"
        label="Nivel"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        id="dadosGestao"
        label="Quantidade de servidores gerenciados"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      </>) : (<></>)}

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}
export default FormEmployee;
