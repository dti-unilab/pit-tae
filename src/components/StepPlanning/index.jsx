import FormActivity from "./FormActivity";
import FormGoal from "./FormGoal";
import FormWork from "./FormWork";
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@material-ui/core";
import ContainerAfastamentos from "./FormWork/ContainerAfastamentos";


function StepPlanning(props) {
  const { onSubmitForm, onAddAfastamento, afastamentos } = props;
  const [stage, setStage] = useState(0);


  function handleSubmitActivity() {
    console.log("Submeteu Activity");
  }
  function handlerNextStep() {
    const next = stage + 1;
    if (next < 3) {
      setStage(next);
    } else {
      onSubmitForm();
    }
  }


  function handleRemoveAfastamento(itemId) {
    //To remove afastamento from context.
  }
  const formStage = [
    <>
      <FormWork onSubmitForm={onAddAfastamento} />
      <ContainerAfastamentos afastamentos={afastamentos}/>
    </>,
    <FormActivity onSubmitForm={handleSubmitActivity} />,
    <FormGoal />,
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
