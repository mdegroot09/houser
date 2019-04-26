import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import WizardURL from './Components/Wizard/WizardURL'
import WizardFinances from './Components/Wizard/WizardFinances'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route exact path='/wizard' component={Wizard}/>
    <Route path='/wizard/URL' component={WizardURL}/>
    <Route path='/wizard/finances' component={WizardFinances}/>
  </Switch>
)