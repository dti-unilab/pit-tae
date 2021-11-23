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
  { description: "25 horas" },
  { description: "30 horas" },
  { description: "40 horas" },
];

const denominacoes = [
  { descricao: "Pró-Reitor" },
  { descricao: "Diretor" },
  { descricao: "Superintendente" },
  { descricao: "Coordenador" },
  { descricao: "Assessor" },
  { descricao: "Gerente" },
  { descricao: "Chefe" },
];

const niveisChefia = [
  { descricao: "CD-1" },
  { descricao: "CD-2" },
  { descricao: "CD-3" },
  { descricao: "CD-4" },
  { descricao: "FG-1" },
  { descricao: "FG-2" },
  { descricao: "FG-3" },
];

function FormEmployee(props) {
  const { onSubmitForm, dadosServidor } = props;
  const [regime, setRegime] = useState(dadosServidor.regime === undefined ? regimes[2] : dadosServidor.regime);
  const [denominacao, setDenominacao] = useState(dadosServidor.denominacao);
  const [nivelChefia, setNivelChefia] = useState(dadosServidor.nivelChefia);
  const [cargoEfetivo, setCargoEfetivo] = useState(dadosServidor.cargoEfetivo === undefined ? "" : dadosServidor.cargoEfetivo);
  const [servidoresGerenciados, setServidoresGerenciados] = useState(dadosServidor.servidoresGerenciados === undefined ? 0 : dadosServidor.servidoresGerenciados);
  const [exerceGestao, setExerceGestao] = useState(dadosServidor.exerceGestao === undefined ? false : dadosServidor.exerceGestao);

  const handleExerceGestao = (event) => {

    if(event.target.checked === false){
      setServidoresGerenciados(0);
    }
    setExerceGestao(event.target.checked);
  };
  const handleChangeRegime = (event, values) => {
    setRegime(values);
  };
  const handleChangeNivel = (event, values) => {
    setNivelChefia(values);
  };
  const handleChangeDenominacao = (event, values) => {
    setDenominacao(values);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({
          cargoEfetivo,
          regime,
          exerceGestao,
          denominacao,
          nivelChefia,
          servidoresGerenciados,
        });
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
        control={
          <Switch
            checked={exerceGestao}
            onChange={handleExerceGestao}
            name="gestao"
          />
        }
        label="Exerce Gestão"
      />

      <br />

      {exerceGestao ? (
        <>
          <Autocomplete
            id="denominacao"
            name="denominacao"
            options={denominacoes}
            getOptionLabel={(option) => option.descricao}
            onChange={handleChangeDenominacao}
            value={denominacao}
            fullWidth
            renderInput={(params) => (
              <TextField
                required
                {...params}
                label="Denominação de Chefia"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            id="nivelChefia"
            name="nivelChefia"
            options={niveisChefia}
            getOptionLabel={(option) => option.descricao}
            onChange={handleChangeNivel}
            value={nivelChefia}
            fullWidth
            renderInput={(params) => (
              <TextField
                required
                {...params}
                label="Nível de Gestão"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <TextField
            value={servidoresGerenciados}
            onChange={(event) => {
              setServidoresGerenciados(event.target.value);
            }}
            id="numeroDeServidores"
            label="Quantidade de servidores sob sua chefia imediata"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </>
      ) : (
        <></>
      )}

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}
export default FormEmployee;
