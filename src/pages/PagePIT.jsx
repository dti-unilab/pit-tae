import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import FormLogin from "../components/FormLogin";
import { DataContext } from "../services/DataContext";

function PagePIT() {
  
  const [data, setData] = useState(undefined);

  function fazerLogin(user){
    console.log(user);
  }
  return (
    <DataContext.Provider value={data}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Plano Individual de Trabalho (PIT)
            </Typography>
            <FormLogin onSubmitForm={fazerLogin}/>
      </Container>
    </DataContext.Provider>
    
  );
}

export default PagePIT;
