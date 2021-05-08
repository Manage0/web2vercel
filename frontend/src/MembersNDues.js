import axios from "axios"
import { useEffect, useState } from "react"
import LoggedInHeader from "./LoggedInHeader"
import {tokenForAxios, outerUsername} from "./mainPage"
import {trigger} from "./LoggedInHeader"
import {CheckLogin} from './PrivateRoute'

const MembersNDues = () =>{

  const [newsToDisplay, setNewsToDisplay] = useState()


  useEffect(() => {
    CheckLogin()
    const getData = async () => {
      try {
        const {
          data: { news }
        } = await axios.post('/api/news', {user:outerUsername})
        setNewsToDisplay(news)
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [trigger])

    const [payed, setPayed] = useState(false)

    const GenerateNews=async()=>{
        try {
            const {
              data: { msg },
            } = await axios.post('/api/generatenews',{
              user: "user"
            })
            setPayed(msg)
            console.log(msg)
          } catch (error) {
            console.log(error.message)
          }
    }

    const LoadPayed = async ()=>{
        console.log(outerUsername)
        var usr =outerUsername
        console.log("usr: "+usr)
        try {
            const {
              data: { msg },
            } = await axios.post('/api/membersndues',{
              user: usr
            })
            setPayed(msg)
            console.log(msg)
          } catch (error) {
            console.log(error.message)
          }
        }


const SwitchPayed=() => {
    axios.defaults.headers.authorization=tokenForAxios
    console.log("pay")
    const getData = async () => {
      try {
          console.log("SwitchPayed is in try")
            const {
                data: { msg },
            } = 
            await axios.put('/api/pay',{user:outerUsername})
            console.log("put gone")
            setPayed(msg)
            console.log("returned value is: "+msg)
        } catch (error) {
            console.log("put not working")
            console.log(error.message)
        }
    }
    getData()
  }

  const DeleteMe=() => {
    axios.defaults.headers.authorization=tokenForAxios
    const getData = async () => {
      try {
            await axios.delete('/api/deleteme',{ data: {user:outerUsername} })
            var homeURL = window.location.href.slice(0, window.location.href.length-12)
            window.location = homeURL;
        } catch (error) {
            console.log("delete not working")
            console.log(error.message)
        }
    }
    getData()
  }


  function writeNews(news) {
    return (
      <div>
        {news}
      </div>
    );
  }
    return(
        <div>
            <LoggedInHeader/>
            <br/>
            Dues:
            <br/>
            Payed? {payed? "payed":"nop"}
            <button onClick={SwitchPayed}>Pay</button>
            <br/>
            username: {outerUsername}
            <button onClick={LoadPayed}>LoadPayed</button>
            <button onClick={DeleteMe}>Delete me</button>
            <button onClick={GenerateNews}>Generate News</button>
            <div>
              {newsToDisplay?newsToDisplay.map(writeNews):"No news found"}
            </div>

        </div>
    )
}

export default MembersNDues