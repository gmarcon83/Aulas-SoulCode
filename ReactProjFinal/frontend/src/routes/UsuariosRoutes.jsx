import React from 'react'
import {Switch, Route} from "react-router-dom"
import MainUsuarios from '../pages/Usuario/Main'

function UsuariosRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/usuarios" component={MainUsuarios}/>
      </Switch>
    </>
  )
}

export default UsuariosRoutes
