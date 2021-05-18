import React from 'react'
import {Switch, Route} from "react-router-dom"
import DetalhesUsuario from '../pages/Usuario/Detalhes'
import InserirUsuario from '../pages/Usuario/Inserir'
import MainUsuarios from '../pages/Usuario/Main'

function UsuariosRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/usuarios" component={MainUsuarios}/>
        <Route exact path="/detalhesUsuario/:id" component={DetalhesUsuario}/>
        <Route exact path="/inserirUsuario" component={InserirUsuario}/>
      </Switch>
    </>
  )
}

export default UsuariosRoutes
