import LoggedInHeader from "./LoggedInHeader"
import {useEffect} from 'react'
import {CheckLogin} from './PrivateRoute'

const SensitiveData = () =>{
    useEffect(()=>{
        CheckLogin()
    })
    return(
        <div>
            <LoggedInHeader/>
            <br/>
            sensitive data
        </div>
    )
}

export default SensitiveData