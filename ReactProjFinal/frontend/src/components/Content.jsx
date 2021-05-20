import React from 'react'
import { Route, Switch } from 'react-router'
import ClientesRoutes from '../routes/ClientesRoutes'
import UsuariosRoutes from '../routes/UsuariosRoutes'
import EquipamentosRoutes from '../routes/EquipamentosRoutes'
import RechartsRoutes from '../routes/RechartsRoutes'
import PDFRoutes from '../routes/PDFRoutes'
import Home from './Home'

function Content() {
  return (
    <div className="flex-shrink-0">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <UsuariosRoutes/>
        <ClientesRoutes/>
        <EquipamentosRoutes/>
        <RechartsRoutes/>
        <PDFRoutes/>
      </div>
    </div>
  )
}

export default Content
