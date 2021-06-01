import React from 'react'
import {Switch, Route} from "react-router-dom"
import MainClientes from '../pages/Cliente/Main'
import InserirClientes from '../pages/Cliente/Inserir'
import ExcluirClientes from '../pages/Cliente/Excluir'
import DetalhesClientes from '../pages/Cliente/Detalhes'
import EditarClientes from '../pages/Cliente/Editar'

function ClientesRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/clientes" component={MainClientes}/>
        <Route exact path="/detalhesCliente/:id" component={DetalhesClientes}/>
        <Route exact path="/inserirCliente" component={InserirClientes}/>
        <Route exact path="/editarCliente/:id" component={EditarClientes}/>
        <Route exact path="/excluirCliente/:id" component={ExcluirClientes}/>
      </Switch>
    </>
  )
}

export default ClientesRoutes;
