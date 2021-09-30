import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function FormLogin({onSubmitForm}) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({login, senha});
      }}
    >
      <TextField
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        id="login"
        label="Login"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
      />
      
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormLogin;