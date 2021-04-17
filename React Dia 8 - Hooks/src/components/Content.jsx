import "./Content.css"
import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../exemplos/Home";
import UseState from "../exemplos/UseState";
import UseEffect from "../exemplos/UseEffect";
import UseRef from "../exemplos/UseRef";
import FormDados from "../exemplos/FormDados";
import UseMemo from "../exemplos/UseMemo";

function Content() {
  return(
    <main className="Content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/useState" component={UseState}/>
        <Route path="/useEffect" component={UseEffect}/>
        <Route path="/useRef" component={UseRef}/>
        <Route path="/formDados" component={FormDados}/>
        <Route path="/useMemo" component={UseMemo}/>
      </Switch>
    </main>
  )
}

export default Content;