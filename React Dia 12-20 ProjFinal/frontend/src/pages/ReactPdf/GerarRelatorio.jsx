import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Exemplo2 from "./Exemplo2";

function GerarRelatorio(props) {
  const { id } = props.match.params;
  return (
    <PDFViewer width="100%" height="500">
      <Exemplo2 id={id} />
    </PDFViewer>
  );
}

export default GerarRelatorio;
