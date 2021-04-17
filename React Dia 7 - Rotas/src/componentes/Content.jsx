import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../paginas/Home";
import Produto from "../paginas/Produto";
import SobreEmpresa from "../paginas/SobreEmpresa";
import NotFound from "../paginas/NotFound";

function Content(){
  return(
    <>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto" component={Produto} />
          <Route path="/sobre" exact component={SobreEmpresa} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  )
}

export default Content;