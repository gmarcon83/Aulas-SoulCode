import React from 'react'
import {Switch, Route} from "react-router-dom"
import DetalhesUsuario from '../pages/Usuario/Detalhes'
import MainUsuarios from '../pages/Usuario/Main'

function UsuariosRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/usuarios" component={MainUsuarios}/>
        <Route exact path="/detalhesUsuario/:id" component={DetalhesUsuario}/>
      </Switch>
    </>
  )
}

export default UsuariosRoutes
