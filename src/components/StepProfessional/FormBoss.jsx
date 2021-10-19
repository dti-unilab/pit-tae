import { Button, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";

function FormBoss(props) {
  const { onSubmitForm } = props;
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ nome, cargo });
        //console.log({ nome, cargo });
      }}
    >
      <CardHeader title="2.2. Dados da Chefia Imediata" />
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nomeChefiaImediata"
        label="Nome"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />
      <TextField
        value={cargo}
        onChange={(event) => {
          setCargo(event.target.value);
        }}
        id="cargoFuncaoChefia"
        label="Cargo de Direção/Função Gratificada"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Avançar
      </Button>
    </form>
  );
}
export default FormBoss;
