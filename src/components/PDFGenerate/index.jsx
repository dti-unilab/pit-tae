import { Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import DataTable from "./DataTable";
import { savePDF } from "@progress/kendo-react-pdf";
import { Box } from "@material-ui/system";

function PDFGenerate(props) {
  const contentArea = useRef(null);
  const handleExportWithMethod = (event) => {
    savePDF(contentArea.current, {
      paperSize: "A4",
      margin: "2cm",
      fileName: `PIT ${new Date().getFullYear()}`,
    });
  };
  //const now = new Date();
  //const dataStr =
  //  now.getDate() + "/" + (1 + now.getMonth()) + "/" + now.getFullYear();

  return (
    <>
      <Typography variant="h4" component="h2">
        Verifique as informações e depois clique em Gerar PDF
      </Typography>
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Button type="submit" onClick={props.back} variant="contained" color="primary">
            Voltar
          </Button>
        </form>
      </Box>

      <div className="Post" ref={contentArea}>
        <DataTable allData={props.allData}/>
      </div>

      <Box
        sx={{
          mx: "auto",
          width: "100%",
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleExportWithMethod}
        >
          Gerar PDF
        </Button>
      </Box>
    </>
  );
}
export default PDFGenerate;
