import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Autocomplete, TextField } from "@mui/material";
import FormData from "./FormData";



export default function PanelData(props) {
  const [tipo, setTipo] = useState(null);


  function onTagsChange(event, value) {
    setTipo(value);
  }

  function nivel1(){
    console.log("Nivel1");
  }

  return (
    <>
      

      {tipo ? (
        <FormData submitForm={nivel1} tipo={tipo}/>
      ) : (
        <Typography variant="h4" component="h2">
          Selecione uma atividade
        </Typography>
      )}
      
    </>
  );
}
