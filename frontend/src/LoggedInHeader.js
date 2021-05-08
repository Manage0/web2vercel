import {Link} from 'react-router-dom'
import "./LoggedInHeader.css"

var trigger=false
const LoggedInHeader = () =>{

    const srcOfNewsImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-E1FBHSrlxsaOZg0ysuQg9gJMvtP-7CaQw&usqp=CAU"

    const LoadNews = ()=>{
        trigger=!trigger
    }

    return(
        <div class="header">
            <div align="center">
            <Link to='./membersndues'>
                <input type="image" src={srcOfNewsImg} onClick={LoadNews} name="news" width="60" height="60" alt="news" class="newsImg"/>
                </Link>
                <Link to='./membersndues'>Members and dues</Link>
                <Link to='./sensitivedata'>Sensitive Data</Link>
                <Link to='./nextmeeting'>Next Meeting</Link>
                <Link to='./gallery'>Gallery</Link>
                <Link to='./'>Main Page</Link>
            </div>
        </div>
    )
}

export {trigger}
export default LoggedInHeader