import React from 'react'
import {Switch, Route} from "react-router-dom"

import MainEquipamentos from '../pages/Equipamentos/Main'
import InserirEquipamento from '../pages/Equipamentos/Inserir'
import DetalhesEquipamento from '../pages/Equipamentos/Detalhes'
import ExcluirEquipamento from '../pages/Equipamentos/Excluir'
import EditarEquipamento from '../pages/Equipamentos/Editar'

function EquipamentosRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/equipamentosCliente/:id" component={MainEquipamentos}/>
        <Route exact path="/inserirEquipamento/:id" component={InserirEquipamento}/>
        <Route exact path="/detalhesEquipamento/:id" component={DetalhesEquipamento}/>
        <Route exact path="/editarEquipamento/:id" component={EditarEquipamento}/>
        <Route exact path="/excluirEquipamento/:id" component={ExcluirEquipamento}/>
      </Switch>
    </>
  )
}

export default EquipamentosRoutes
