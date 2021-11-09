import { Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import DataTable from "./DataTable";
import { savePDF } from "@progress/kendo-react-pdf";
import { Box } from "@material-ui/system";

function PDFGenerate(props) {
  const { back } = props;
  const contentArea = useRef(null);
  const handleExportWithMethod = (event) => {
    savePDF(contentArea.current, {
      paperSize: "A4",
      margin: "2cm",
      fileName: `PIT ${new Date().getFullYear()}`,
    });
  };
  

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
            back();
          }}
        >
          <Button type="submit" variant="contained" color="primary">
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
