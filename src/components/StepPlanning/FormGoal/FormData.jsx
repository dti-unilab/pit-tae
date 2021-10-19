import { Button } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

function FormData(props) {
  const { tipo } = props;
  const { onSubmitForm } = props;
  const [frequencia, setFrequencia] = React.useState("female");

  const handleChangeFrequencia = (event) => {
    setFrequencia(event.target.value);
  };
  function Form123() {
    return (
      <>
        <TextField
          id="ordem1"
          label="Ordem de prioridade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="Atividade1"
          label="Atividade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="fieldMeta1"
          label="Meta de desempenho"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="fieldPeriodo1"
          label="Período para atingimento da meta"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="fieldObs"
          label="Observação"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
      </>
    );
  }
  function Form0() {
    return (
      <>
        <TextField
          id="fieldSequencia"
          label="Sequência"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="fieldAtividade"
          label="Atividade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          id="fieldPublico"
          label="Público Atendido"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Frequência</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={frequencia}
            onChange={handleChangeFrequencia}
          >
            <FormControlLabel
              value="Turnos Manhã e Tarde"
              control={<Radio />}
              label="Turnos Manhã e Tarde"
            />
            <FormControlLabel
              value="Turno Manhã."
              control={<Radio />}
              label="Turno Manhã."
            />
            <FormControlLabel
              value="Turno Tarde"
              control={<Radio />}
              label="Turno Tarde"
            />
            <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="expectativa"
          label="Expectativa de melhoria da atividade durante o trabalho remoto"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </>
    );
  }
  const listForms = [<Form0 />, <Form123 />, <Form123 />, <Form123 />];
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ dados: "Data teste" });
      }}
    >
      Meu Form Que sera o form data
      {listForms[tipo.id]}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<AddCircleIcon />}
        fullWidth
      >
        ATIVIDADES
      </Button>
    </form>
  );
}
export default FormData;
