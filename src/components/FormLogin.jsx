import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader title="Autenticação" />
          <CardContent>
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
export default FormLogin;
