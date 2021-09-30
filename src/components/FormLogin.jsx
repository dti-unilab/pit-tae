import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function FormLogin(props) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmitForm({ login, senha });
      }}
    >
      <TextField
        disabled={props.disabledLogin}
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        id="login"
        label="Login do SIG"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        disabled={props.disabledLogin}
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha do SIG"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
      />

      <Button
        disabled={props.disabledLogin}
        type="submit"
        variant="contained"
        color="primary"
      >
        Logar
      </Button>
    </form>
  );
}
export default FormLogin;
