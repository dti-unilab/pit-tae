import { Button, Stack } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import FormLogin from "../components/FormLogin";
import { DataContext } from "../services/DataContext";
import api from "../services/api";

function PagePIT() {
  const [data, setData] = useState(undefined);

  async function handleLogin(user) {
    await api
      .post("/authenticate", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((erro) => console.log(erro));
  }
  return (
    <DataContext.Provider value={data}>
      <Container maxWidth="sm">
        <br />
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Plano Individual de Trabalho (PIT)
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Utilize o formulário abaixo para gerar o PIT.
        </Typography>
        <FormLogin onSubmitForm={handleLogin} />
      </Container>
    </DataContext.Provider>
  );
}

export default PagePIT;
