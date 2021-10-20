import { Typography } from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


export default function FormActivity(props) {

  return (
    <>
      <CardHeader title="Atividades em Trabalho Remoto ou sob Revezamento" />
      <Typography
        variant="subtitle1"
        align="justify"
        color="text.secondary"
        component="p"
      >
        Indique abaixo a modalidade de trabalho predominante esperada para o
        servidor nos próximos três meses contados a partir do envio das
        informações à SGP (Art 7º da IN SGP/UNILAB nº 8 de 30 de novembro de
        2020).
      </Typography>
      <br />
      <Typography
        variant="subtitle1"
        align="justify"
        color="text.secondary"
        component="p"
      >
        Lembrando que, ainda que a modalidade (remoto ou revezamento) possa ser
        alterada durante o período de três meses, sempre deverá ser feita pela
        chefia imediata a avaliação da incompatibilidade entre a natureza das
        atividades desempenhadas pelo servidor e o regime de trabalho remoto.
      </Typography>
      <br />
          
      <FormControl component="fieldset">
        <FormLabel component="legend">Regime de Trabalho</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={props.regime}
          onChange={props.handleChange}
        >
          <FormControlLabel
            value="Remoto integral"
            control={<Radio />}
            label="Remoto integral"
          />
          <FormControlLabel
            value="Revezamento de equipe"
            control={<Radio />}
            label="Revezamento de equipe"
          />
          <FormControlLabel
            value="Presencial - parcial"
            control={<Radio />}
            label="Presencial - parcial"
          />
          <FormControlLabel
            value="Presencial - integral"
            control={<Radio />}
            label="Presencial - integral"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
