import {api, endpoints} from '../../../Lib/Api'
import {useEffect,useState,useMemo} from 'react';
import {useSelector} from 'react-redux';
import { getHeaderStructure } from '../../../Lib/helper';
import './CommentsKritika.css'
const CommentsKritika = () =>{
    const auth = useSelector((state)=>state.auth.data)
    const [data,setData] = useState([]);
    const config =useMemo(()=>
    {

   
      
     return { headers: getHeaderStructure(auth.token)
     } 
    }
    ,[auth])
    useEffect(()=>{
        const getInfo = async() =>{
            const result = await api.call(endpoints.getComments,config);
            if(result.success){
                setData(result.data);
            }
        }
        getInfo();

    },[config])
    console.log(data);
    return <>
    <div className="comments-wrapper">

   
    {data&&data.map((elem)=>(
        <>
        <div className="single-comment">
            <div className="name-surname">
                <p>{elem.name} {elem.surname}</p>
            </div>
            <div className="number-email">
                <p>{elem.number}</p>
                <p>{elem.email}</p>
            </div>
            <div className="comment">
                <p>{elem.comment}</p>
            </div>

        </div>

        </>
        
    ))}
     </div>
    </>
}

export default CommentsKritika;