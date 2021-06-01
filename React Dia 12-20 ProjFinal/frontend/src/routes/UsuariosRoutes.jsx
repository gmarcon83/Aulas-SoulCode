import React from 'react'
import {Switch, Route} from "react-router-dom"
import DetalhesUsuario from '../pages/Usuario/Detalhes'
import EditarUsuario from '../pages/Usuario/Editar'
import ExcluirUsuario from '../pages/Usuario/Excluir'
import InserirUsuario from '../pages/Usuario/Inserir'
import MainUsuarios from '../pages/Usuario/Main'

function UsuariosRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/usuarios" component={MainUsuarios}/>
        <Route exact path="/detalhesUsuario/:id" component={DetalhesUsuario}/>
        <Route exact path="/inserirUsuario" component={InserirUsuario}/>
        <Route exact path="/editarUsuario/:id" component={EditarUsuario}/>
        <Route exact path="/excluirUsuario/:id" component={ExcluirUsuario}/>
      </Switch>
    </>
  )
}

export default UsuariosRoutes
