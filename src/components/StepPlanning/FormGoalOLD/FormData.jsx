import { Button } from "@mui/material";
import React, { useState } from "react";
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

  const [ordem, setOrdem] = useState(1);
  const [sequencia, setSequencia] = useState(1);
  const [atividade, setAtividade] = useState("");
  const [publicoAtendido, setPublicoAtendido] = useState("");
  const [frequencia, setFrequencia] = useState("Turnos Manhã e Tarde");
  const [expectativa, setExpectativa] = useState("");
  const [meta, setMeta] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [observacao, setObservacao] = useState("");

  const handleChangeFrequencia = (event) => {
    setFrequencia(event.target.value);
  };

  function Form123() {
    return (
      <>
        <TextField
          value={ordem}
          onChange={(event) => {
            setOrdem(event.target.value);
          }}
          id="ordem1"
          label="Ordem de prioridade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={atividade}
          onChange={(event) => {
            setAtividade(event.target.value);
          }}
          id="Atividade1"
          label="Atividade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={meta}
          onChange={(event) => {
            setMeta(event.target.value);
          }}
          id="fieldMeta1"
          label="Meta de desempenho"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={periodo}
          onChange={(event) => {
            setPeriodo(event.target.value);
          }}
          id="fieldPeriodo1"
          label="Período para atingimento da meta"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={observacao}
          onChange={(event) => {
            setObservacao(event.target.value);
          }}
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
          value={sequencia}
          onChange={(event) => {
            setSequencia(event.target.value);
          }}
          id="fieldSequencia"
          label="Sequência"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={atividade}
          onChange={(event) => {
            setAtividade(event.target.value);
          }}
          id="fieldAtividade"
          label="Atividade"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
        />
        <TextField
          value={publicoAtendido}
          onChange={(event) => {
            setPublicoAtendido(event.target.value);
          }}
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
          value={expectativa}
          onChange={(event) => {
            setExpectativa(event.target.value);
          }}
          id="expectativa"
          label="Expectativa de melhoria da atividade durante o trabalho remoto"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </>
    );
  }
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
       /*
        const novaAtividade = {
          id: Date.now(),
          tipo,
          sequencia,
          ordem,
          atividade,
          publicoAtendido,
          meta,
          frequencia,
          periodo,
          expectativa,
          observacao
        };
        props.submitForm(novaAtividade);
        */
       
      }}
    >
      
      {tipo.id === 0 ? <Form0 /> : <Form123 />}
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
