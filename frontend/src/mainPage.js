import './mainPage.css'
import {Link} from 'react-router-dom'
import React, {Suspense, useEffect, useState} from 'react'
import axios from 'axios'
import {CheckLogin} from './PrivateRoute'
const Black_Eye= React.lazy(() => import('./images/Black_Eye'));

var tokenForAxios
var outerUsername

const Main =()=>
{
  const [serverTime, setServerTime] = useState("Time from server is loading...")
    const [username, setUsername] =useState()
    const [password, setPassword] =useState()
    const [init, setInit] = useState(false)
    const [loginState, setLoginState] = useState("Not logged in")

    useEffect(()=>{
      const initialize = async () => {
        setInit(true)
        const {data:{csrfToken}} = await axios.get('/api/csrf-protection')
        axios.defaults.headers.post['X-CSRF-TOKEN'] = csrfToken
        axios.defaults.headers.put['X-CSRF-TOKEN'] = csrfToken
        axios.defaults.headers.delete['X-CSRF-TOKEN'] = csrfToken
      }
      if(!init){
        initialize()
      }
      CheckLogin()
    })

    useEffect(() => {
      const getData = async () => {
        try {
          const {
            data: { time }
          } = await axios.get('/api/servertime')
          setServerTime(time)
        } catch (error) {
          console.log(error.message)
        }
      }
      getData()
    }, [])

    const Login = async ()=>{
        try {
            const {
              data: { msg },
            } = await axios.post('/api/login',{
              username,
              password
            })
            if(msg==="No such user" || msg==="Wrong password"){
              setLoginState(msg)
            } else{
              setLoginState("Logged in")
            }
            outerUsername=username
            axios.defaults.headers.authorization=`Bearer ${msg}`
            tokenForAxios=`Bearer ${msg}`
          } catch (error) {
            console.log(error.message)
          }
    }

    const Register = async ()=>{
      try {
          await axios.post('/api/register',{
            username,
            password
          })
        } catch (error) {
          console.log(error.message)
        }
  }

    return(
        <div>
            <div id='serverHeader'>
              Time on the server when loading the page: {serverTime}
            </div>
            <div align="right">
              <Suspense fallback={<div>Loading...</div>}>
                <Black_Eye />
              </Suspense>
              <div class='login' id='login'>
                <h1>Log in Here!</h1>
                <br/>
                <label for="username">Username:</label>
                <br/>
                <input placeholder="Enter username here..." type="text" id="username" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <br/>
                <input placeholder="Enter password here..." type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button type="button" onClick={Login}>Login</button> 
                <br/>
              </div>
              <div class="register">
                  <h1>Register Here!</h1>
                  <br/>
              <label for="usernameReg">Username:</label>
              <br/>
              <input placeholder="Enter username here..." type="text" id="usernameReg" name="usernameReg" onChange={(e)=>(setUsername(e.target.value))}/>
              <br/>
              <label for="passwordReg">Password:</label>
              <br/>
              <input placeholder="Enter password here..." type="password" id="passwordReg" name="passwordReg" onChange={(e)=>setPassword(e.target.value)}/>
              <br/>
              <button type="button" onClick={Register}>Register</button> 
              </div>
            </div>
            <br/>
            <div class="publicdata">
            <Link to='./public'>Public data</Link>
            <br/>
            <Link to='./membersndues'>After login (Should be clicked twice)</Link>
            <br/>
            {loginState}
            </div>
            <div id='mainTxt'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis tincidunt augue, pellentesque consectetur velit euismod congue. Aenean placerat lacus eu fringilla maximus. Donec enim ipsum, sagittis ac ultrices eu, molestie et felis. Donec eu ex nec mauris consequat euismod quis in tortor. Sed sagittis pharetra massa, ut laoreet erat venenatis in. Pellentesque commodo, turpis in vehicula condimentum, tellus sapien ornare massa, vitae tristique eros ante id mauris. Morbi a nulla non sapien fringilla malesuada.

                Pellentesque tempor nec risus eget commodo. Nullam vitae venenatis erat. Morbi pellentesque diam enim, vel molestie leo elementum in. Sed fermentum pretium pulvinar. Nullam diam sapien, consectetur in enim id, posuere suscipit lorem. Fusce maximus orci ut neque iaculis, a lacinia nisl placerat. Suspendisse sit amet mauris quis nisi aliquam porta. Integer cursus maximus magna, eu fringilla augue suscipit faucibus. Donec gravida ante malesuada, luctus augue eu, semper dolor. Aenean vel luctus odio. Nullam auctor orci quis eros interdum, ut ullamcorper odio ullamcorper. Phasellus posuere ut enim at tincidunt. Vestibulum lobortis molestie urna, quis dapibus dolor dignissim at. Nam vitae venenatis odio. Duis tincidunt porttitor leo, at porta augue volutpat ac. 
            </div>
        </div>
    )
}

export{outerUsername}
export{tokenForAxios}
export default Main

