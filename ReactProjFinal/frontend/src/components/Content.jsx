import React from 'react'
import { Route, Switch } from 'react-router'
import UsuariosRoutes from '../routes/UsuariosRoutes'
import Home from './Home'

function Content() {
  return (
    <div className="flex-shrink-0">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <UsuariosRoutes/>
      </div>
    </div>
  )
}

export default Content
