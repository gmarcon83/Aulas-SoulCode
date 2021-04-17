import "./Content.css"
import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../exemplos/Home";
import UseState from "../exemplos/UseState";
import UseEffect from "../exemplos/UseEffect";

function Content() {
  return(
    <main className="Content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/useState" component={UseState}/>
        <Route path="/useEffect" component={UseEffect}/>
      </Switch>
    </main>
  )
}

export default Content;