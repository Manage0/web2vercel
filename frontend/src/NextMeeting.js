import LoggedInHeader from "./LoggedInHeader"
import {useEffect} from 'react'
import {CheckLogin} from './PrivateRoute'

const NextMeeting = () =>{
    useEffect(()=>{
        CheckLogin()
    })
    return(
        <div>
            <LoggedInHeader/>
            <br/>
            today :)
        </div>
    )
}

export default NextMeeting