import React, {useContext} from "react";
import { DataContext } from "../../services/DataContext";

function PDFGenerate(){
  const dataContext = useContext(DataContext);
  console.log("PDF");
  console.log(dataContext);
  return (
    <>
        PDF Generate
    </>
  );
};
export default PDFGenerate;
