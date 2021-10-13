import { Button } from "@material-ui/core";
import React from "react";
import FormActivity from "./FormActivity";
import FormGoal from "./FormGoal";
import FormWork from "./FormWork";

function StepPlanning(props) {

  return (
    <>
      <FormWork />
      <FormActivity />
      <FormGoal />
      <br />
      <form>
        <Button type="submit" variant="contained" color="primary">
          Avançar
        </Button>
      </form>
    </>
  );
}
export default StepPlanning;
