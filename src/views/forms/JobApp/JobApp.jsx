import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {api,endpoints} from '../../../Lib/Api'
import { getHeaderStructure } from '../../../Lib/helper';
import {useSelector} from 'react-redux'
import './JobApp.css'
const JobApp = () =>{
    const auth = useSelector((state)=>state.auth.data);
    const navigate = useNavigate();
    
    const [data,setData] = useState([]);
    const config = {
        headers:getHeaderStructure(auth.token),
    }
    useEffect(()=>{
        const getApplications = async() =>{
            const result = await api.call(endpoints.getApplications,config);
            if(result.success){
                setData(result.data);
            }
            

        }
        getApplications();
    })

    return <>
    <div className="wrapper-applications">
        {data && data.map((elem)=>(
            <>
            <div className="wrapper-elem-app" onClick={()=>{
                navigate(`/forms/applications/${elem._id}`)
            }}>
                <div className="name-containers">
                    <p>{elem.name} {elem.surname}</p>
                </div>
                <div className="position-containers">
                    <p>{elem.position}</p>
                </div>
                <div className="date-application">
                    <p>{elem.createdAt.split('T')[0]}</p>
                </div>
            </div>
            
            </>
        ))}

    </div>
    </>
}
export default JobApp;