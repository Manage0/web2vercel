import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'

const PublicData=()=>{

    const [down1,setdown1]=useState("nope")
    const [down2,setdown2]=useState("nope")

    const DownloadFirst = async ()=>{
        try {
            /*const {
            data: { file },
            } = */
            await axios.get('/api/download1')
            //setdown1(file)
            //console.log(down1)
            console.log("dload1")
        } catch (error) {
            console.log(error.message)
        }
    }

    const DownloadSecond = async ()=>{
        try {
            const {
            data: { msg },
            } = await axios.get('/api/download2')
            setdown2(msg)
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div align="center">
            Public Data
            <br/>
            <Link to='./'>Back</Link>
            <br/>
            <table>
                <tr>
                    <td>
                        First public data
                    </td>
                    <td>
                        <a href="/api/files/cutedoggo.jpg" download>dload</a>
                    </td>
                </tr>
                <tr>
                <td>
                        Second public data
                    </td>
                    <td>
                    <a href="/api/files/snowymou.jpg" download>dload</a>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PublicData