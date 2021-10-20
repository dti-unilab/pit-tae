import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const tiposAtividade = [
  { descricao: "ATIVIDADES DE NATUREZA CONTÍNUA (DE ROTINA DIÁRIA) ", id: 0 },
  { descricao: "ATIVIDADES VINCULADAS A PROCESSO SEI", id: 1 },
  { descricao: "ATIVIDADES VINCULADAS A PROJETOS", id: 2 },
  { descricao: "ATIVIDADES VINCULADAS A AÇÕES ", id: 3 },
];

function FormGoal(props) {
  const [tipoAtividade, setTipoAtividade] = useState(tiposAtividade[0]);
  const [sequenciaOrdem, setSequenciaOrdem] = useState(1);
  const [atividades, setAtividades] = useState("");
  const [publicoMetas, setPublicoMetas] = useState("");
  const [frequenciaPeriodo, setFrequenciaPeriodo] = useState("");
  const [expectativaObservacao, setExpectativaObservacao] = useState("");
  const handleChangeTipo = (event, values) => {
    setTipoAtividade(values);
  };
  const handleChangeFrequencia = (event) => {
    setFrequenciaPeriodo(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const novaAtividade = {
          id: Date.now(),
          tipoAtividade,
          sequenciaOrdem,
          atividades,
          publicoMetas,
          frequenciaPeriodo,
          expectativaObservacao,
        };
        props.onSubmitForm(novaAtividade);
        setTipoAtividade(null);
        setSequenciaOrdem(0);
        setAtividades("");
        setPublicoMetas("");
        setFrequenciaPeriodo("");
        setExpectativaObservacao("");
      }}
    >
      <CardHeader title="Metas de Desempenho" />
      <Autocomplete
        id="tipo-atividade"
        options={tiposAtividade}
        getOptionLabel={(option) => option.descricao}
        onChange={handleChangeTipo}
        value={tipoAtividade}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label="Tipo de Atividade"
            variant="outlined"
          />
        )}
      />
      {tipoAtividade === null ? (
        "Selecione o tipo de Atividade"
      ) : (
        <>
          <TextField
            value={sequenciaOrdem}
            onChange={(event) => {
              setSequenciaOrdem(event.target.value);
            }}
            id="sequencia"
            label={
              tipoAtividade === null
                ? "Sequencia"
                : tipoAtividade.id === 0
                ? "Sequência"
                : "Ordem"
            }
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
          />
          <TextField
            value={atividades}
            onChange={(event) => {
              setAtividades(event.target.value);
            }}
            id="atividades"
            label="Atividades"
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
          />
          <TextField
            value={publicoMetas}
            onChange={(event) => {
              setPublicoMetas(event.target.value);
            }}
            id="publicoAtendido"
            label={
              tipoAtividade === null
                ? ""
                : tipoAtividade.id === 0
                ? "Público Atendido"
                : "Meta de desempenho"
            }
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
          />
          {tipoAtividade === null ? (
            ""
          ) : tipoAtividade.id === 0 ? (
            <FormControl component="fieldset">
              <FormLabel component="legend">Frequência</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={frequenciaPeriodo}
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
                <FormControlLabel
                  value="Outro"
                  control={<Radio />}
                  label="Outro"
                />
              </RadioGroup>
            </FormControl>
          ) : (
            <TextField
              value={frequenciaPeriodo}
              onChange={(event) => {
                setFrequenciaPeriodo(event.target.value);
              }}
              id="periodo"
              label="Período Para atingimento da meta"
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth
            />
          )}

          <TextField
            value={expectativaObservacao}
            onChange={(event) => {
              setExpectativaObservacao(event.target.value);
            }}
            id="expectativa"
            label={
              tipoAtividade === null
                ? ""
                : tipoAtividade.id === 0
                ? "Expectativa de melhoria da atividade durante o trabalho remoto"
                : "Observação"
            }
            variant="outlined"
            margin="normal"
            required={true}
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
        </>
      )}
    </form>
  );
}
export default FormGoal;
