import React from 'react'
import {Redirect, Route} from "react-router-dom"
import axios from 'axios'


var message =false

const CheckLogin = async ()=>{
    message =false
    try {
        const {
          data: { msg }
        } = await axios.get('/api/checklogin')
        message=msg
      } catch (error) {
        console.log(error.message)
      }
    console.log("message: "+message)
}

const PrivateRoute=({component: Component, ...rest}) =>(
    <Route {...rest} render={props=>message?(<Component {...props}/>):(<Redirect to={{pathname: "/",state:{from:props.location}}}/>)}></Route>
    )

export {PrivateRoute}
export {CheckLogin}

