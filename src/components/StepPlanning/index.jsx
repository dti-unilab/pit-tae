import FormActivity from "./FormActivity";
import FormWork from "./FormWork";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@material-ui/core";
import ContainerAfastamentos from "./FormWork/ContainerAfastamentos";
import ContainerAtividades from "./FormGoal/ContainerAtividades";
import FormGoal from "./FormGoal";

function StepPlanning(props) {
  const { afastamentos, atividades } = props;
  const [stage, setStage] = useState(0);

  function handleSubmitActivity() {

  }
  function handlerNextStep() {
    const next = stage + 1;
    if (next < 3) {
      setStage(next);
    } else {
      setStage(0);
      props.onFinishPlanning();
    }
  }

  const formStage = [
    <>
      <FormWork onSubmitForm={props.onAddAfastamento} />
      <ContainerAfastamentos
        afastamentos={afastamentos}
        deleteItem={props.handleRemoveAfastamento}
      />
    </>,
    <FormActivity
      regime={props.regime}
      handleChange={props.handleRegime}
      onSubmitForm={handleSubmitActivity}
    />,
    <>
      <FormGoal onSubmitForm={props.onAddAtividade} />
      <ContainerAtividades
        atividades={atividades}
        deleteItem={props.handleRemoveAtividade}
      />
    </>,
  ];

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            {formStage[stage]}
            <CardActions>
              <Button
                onClick={handlerNextStep}
                type="submit"
                variant="contained"
                color="primary"
              >
                Avançar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default StepPlanning;
