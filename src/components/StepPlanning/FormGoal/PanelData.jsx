import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Autocomplete, TextField } from "@mui/material";
import FormData from "./FormData";

const tiposAtividade = [
  { descricao: "ATIVIDADES DE NATUREZA CONTÍNUA (DE ROTINA DIÁRIA) ", id: 0 },
  { descricao: "ATIVIDADES VINCULADAS A PROCESSO SEI", id: 1 },
  { descricao: "ATIVIDADES VINCULADAS A PROJETOS", id: 2 },
  { descricao: "ATIVIDADES VINCULADAS A AÇÕES ", id: 3 },
];

export default function PanelData(props) {
  const [tipo, setTipo] = useState(tiposAtividade[0]);


  function onTagsChange(event, value) {
    setTipo(value);
  }
  function handleSubmitFormData(data){
    console.log("Segue os dados: ");
    console.log(data);
    //Aqui eu adiciono no contexto; 

  }

  return (
    <>
      <Autocomplete
        id="tipo-atividade"
        options={tiposAtividade}
        getOptionLabel={(option) => option.descricao}
        onChange={onTagsChange}
        value={tipo}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Tipo de Atividade" variant="outlined" />
        )}
      />

      {tipo ? (
        <FormData tipo={tipo} onSubmitForm={handleSubmitFormData}/>
      ) : (
        <Typography variant="h4" component="h2">
          Selecione uma atividade
        </Typography>
      )}
      
    </>
  );
}
