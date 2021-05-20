import React from "react";
import { Switch, Route } from "react-router-dom";
import Exemplo1Rend from "../pages/ReactPdf/RenderEx1";
import GerarRelatorio from "../pages/ReactPdf/GerarRelatorio";

function RechartsRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/pdfex1" component={Exemplo1Rend} />
        <Route exact path="/gerarRelatorio/:id" component={GerarRelatorio} />
      </Switch>
    </>
  );
}

export default RechartsRoutes;
