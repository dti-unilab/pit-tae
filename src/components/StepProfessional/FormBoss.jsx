import { Button, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";

function FormBoss(props) {
  const { onSubmitForm } = props;
  const [periodo] = useState({
    descricao: "Outubro a Dezembro de 2021",
  });
  const [regime] = useState({ descricao: "40 horas" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ periodo, regime });
      }}
    >
      <CardHeader title="2.1. Dados da Chefia Imediata" />
      <TextField
        id="nomeChefiaImediata"
        label="Nome"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
      />
      <TextField
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
