import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TextField, Button } from "@material-ui/core";
import { Alert } from "@mui/material";

function StepAuth(props) {
  const { erros } = props;
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({login: { valid: true, text: "" }, senha:{ valid: true, text: "" }});

  const [errorLogin, setErrorLogin] = useState({ valid: true, text: "" });

  function validateLogin(event) {
    if (event.target.value.length > 3) {

      setErrorLogin({ valid: true, text: "" });
    } else {
      setErrorLogin({ valid: false, text: "Digite no mínimo 3 caracteres" });
    }
  }

  function canISubmit() {
    const erros = this.state.errosData;
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmitForm({ login, senha });
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader title="Autenticação" />
          <CardContent>
            {erros.login.valid ? (
              ""
            ) : (
              <Alert severity="error">{erros.login.text}</Alert>
            )}
            <TextField
              required={true}
              disabled={props.disabledLogin}
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
              error={!errorLogin.valid}
              onBlur={validateLogin}
              helperText={errorLogin.text}
              id="login"
              label="Login do SIG"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              required={true}
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

            <CardActions>
              <Button
                disabled={props.disabledLogin}
                type="submit"
                variant="contained"
                color="primary"
              >
                Logar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
}
export default StepAuth;
