import LoggedInHeader from "./LoggedInHeader"
import {useEffect} from 'react'
import {CheckLogin} from './PrivateRoute'

const Gallery = () =>{
    useEffect(()=>{
        CheckLogin()
    })
    return(
        <div>
            <LoggedInHeader/>
            <br/>
            pics
        </div>
    )
}

export default Gallery