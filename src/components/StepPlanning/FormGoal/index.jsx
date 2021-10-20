import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
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
  const [tipoAtividade, setTipoAtividade] = useState(null);
  const [sequenciaOrdem, setSequenciaOrdem] = useState(1);
  const [atividades, setAtividades] = useState("");
  const [publicoMetas, setPublicoMetas] = useState("");
  const [frequenciaPeriodo, setFrequenciaPeriodo] = useState("");
  const [expectativaObservacao, setExpectativaObservacao] = useState("");
  const handleChangeTipo = (event, values) => {
    setTipoAtividade(values);
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
          expectativaObservacao
        };
        props.onSubmitForm(novaAtividade);
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

      <TextField
        value={sequenciaOrdem}
        onChange={(event) => {
          setSequenciaOrdem(event.target.value);
        }}
        id="sequencia"
        label="sequencia"
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
        label="Público Atendido"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />
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
      <TextField
        value={expectativaObservacao}
        onChange={(event) => {
          setExpectativaObservacao(event.target.value);
        }}
        id="expectativa"
        label="Expectativa de melhoria da atividade durante o trabalho remoto"
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
    </form>
  );
}
export default FormGoal;
