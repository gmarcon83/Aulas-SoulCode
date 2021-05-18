import React from 'react'
import {Switch, Route} from "react-router-dom"
import MainClientes from '../pages/Cliente/Main'

function ClientesRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/clientes" component={MainClientes}/>
      </Switch>
    </>
  )
}

export default ClientesRoutes;
