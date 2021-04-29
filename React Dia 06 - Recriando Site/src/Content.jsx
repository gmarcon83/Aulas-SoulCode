import React from "react";
import {Switch, Route} from "react-router-dom"
import Hero from "./Paginas/Hero/Hero";
import Hotel from "./Paginas/Hotel/Hotel";
import Info from "./Paginas/Info/Info";
import Assina from "./Paginas/Assina/Assina";
import NotFound from "./Paginas/NotFound";

function Content() {
  return (
    <>
    <main>
      <Switch>
        <Route path="/Hero" component={Hero} />
        <Route path="/Hotel" component={Hotel} />
        <Route path="/Info" component={Info} />
        <Route path="/Assina" component={Assina} />
        <Route component={NotFound} />
      </Switch>
      </main>
    </>
  );
}

export default Content;
