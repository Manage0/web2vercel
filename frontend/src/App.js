import React from 'react' 
import Main from './mainPage'
import PublicData from './publicData'
import MembersNDues from './MembersNDues'
import SensitveData from './SensitiveData'
import NextMeeting from './NextMeeting'
import {PrivateRoute, CheckLogin} from './PrivateRoute'
import { Redirect, Route, Switch } from "react-router-dom";
import {useEffect} from 'react'

import './App.css'
import Gallery from './Gallery'

function App()  {
  useEffect(()=>{
    CheckLogin()
})
  return (
    <Switch>
     <PrivateRoute exact path="/membersndues" component={MembersNDues}/>
     <PrivateRoute exact path="/sensitivedata" component={SensitveData}/>
     <PrivateRoute exact path="/nextmeeting" component={NextMeeting}/>
     <PrivateRoute exact path="/gallery" component={Gallery}/>
      <Route exact path="/">
            <Main />
      </Route>
      <Route exact path="/public">
            <PublicData />
      </Route>
      <Redirect to='/'/>
    </Switch>
  );
}

export default App
