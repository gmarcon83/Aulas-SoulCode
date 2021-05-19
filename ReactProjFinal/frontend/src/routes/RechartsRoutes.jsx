import React from 'react'
import {Switch, Route} from "react-router-dom"
import Exemplo1 from '../pages/Recharts/Recharts1'
import Exemplo2 from '../pages/Recharts/Recharts2'
import Exemplo3 from '../pages/Recharts/Recharts3'
import Exemplo4 from '../pages/Recharts/Recharts4'

function RechartsRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/exemplo1"component={Exemplo1} />
        <Route exact path="/exemplo2"component={Exemplo2} />
        <Route exact path="/exemplo3"component={Exemplo3} />
        <Route exact path="/exemplo4"component={Exemplo4} />
      </Switch>
    </>
  )
}

export default RechartsRoutes
