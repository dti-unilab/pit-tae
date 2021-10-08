import { Autocomplete, Button, TextField, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormWork from "./FormWork";
import FormActivity from "./FormActivity";

export default function FormGoal() {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader title="Metas de Desempenho" />
          <CardContent>
            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              Indique abaixo as metas de desempenho das atividades que serão
              desenvolvidas em trabalho remoto, quando este ocorrer integral
              (dias trabalhados integralmente de forma remota) ou parcial (dias
              de trabalho em regime de revezamento entre o trabalho presencial e
              remoto), para os próximos três meses, conforme descrição a seguir:
            </Typography>
            <br />

            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              (a) Ordem de prioridade – atividade considerada prioritária dentre
              as demais atividades que serão desenvolvidas nos dias de trabalho
              remoto.
            </Typography>
            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              (b) Atividade – processo de trabalho que será desenvolvido pelo
              servidor nos dias de trabalho remoto, podendo ser em fluxo
              definido por meio de processo SEI ou por ação não vinculada ao
              SEI.
            </Typography>
            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              (c) Meta de desempenho – Resultado esperado para a atividade,
              quantitativa ou qualitativamente, dentro do período proposto de
              acordo com o planejamento interno da unidade máxima.
            </Typography>

            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              (d) Período esperado para atingimento da meta – Prazo programado
              para cumprimento do resultado projetado (meta), podendo ser em
              dias, semanas ou meses, desde que não ultrapasse três meses após a
              aprovação da SGP.
            </Typography>
            <Typography
              variant="subtitle1"
              align="justify"
              color="text.secondary"
              component="p"
            >
              (e) Observação – elencar qualquer situação referente à meta.
            </Typography>

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
          </CardContent>
        </Card>
      </Box>

      <br />
      <Button type="submit" variant="contained" color="primary">
        Avançar
      </Button>
      <br />
      <br />
    </>
  );
}
