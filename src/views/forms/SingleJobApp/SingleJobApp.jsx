import {useState,useEffect,useMemo} from 'react';

import {api,endpoints} from '../../../Lib/Api'
import { getHeaderStructure } from '../../../Lib/helper';
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import './SingleJobApp.css'
const SingleJobApp = () =>{
    const auth = useSelector((state)=>state.auth.data);
    const location = useLocation();

    const postId = location.pathname.split('/')[3]

    
    const [data,setData] = useState(false);
    const config =useMemo(()=>{

    
        return{
            headers:getHeaderStructure(auth.token),
            params:[postId]
        

        }
    
  
   
   
    
 } ,[postId,auth.token]) 
    useEffect(()=>{
        const getSingleApp = async () =>{
            const result = await api.call(endpoints.getSingleApplication,config);
            console.log(result);
            if(result.success){
                setData([result.data]);
            }

        }
        getSingleApp();

    },[config])
    console.log(data);
    
    return <>
    {data&&(
        <div className="application-wrapper-single">
        <div className="position-single">
           <p>Pozita: {data[0].position}</p>
            
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Emri: {data[0].name}</p>
            </div>
            <div className="second">
                <p>Mbiemri: {data[0].surname}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Datlindja: {data[0].birthdate.split('T')[0]}</p>
            </div>
            <div className="second">
                <p>Vendlindja: {data[0].birthplace}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Statusi martesor: {data[0].married}</p>
            </div>
            <div className="second">
                <p>Fëmijë: {data[0].children}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>ID Personale: {data[0].personalId}</p>
            </div>
            <div className="second">
                <p>Adresa: {data[0].address}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Nr.Telefonit: {data[0].telephone}</p>
            </div>
            <div className="second">
                <p>Email: {data[0].email}</p>
            </div>

        </div>
        <div className="title-containers">
            <p>Gjuhët</p>
        </div>
        <div className="title-containers">
            <p>E folur</p>
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Shqipe: {data[0].albanianR}</p>
            </div>
            <div className="second">
                <p>Serbe: {data[0].serbianR}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Angleze: {data[0].englishR}</p>
            </div>
            <div className="second">
                <p>Italiane: {data[0].othersR}</p>
            </div>

        </div>
        <div className="title-containers">
            <p>E shkruarë</p>
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Shqipe: {data[0].englishW}</p>
            </div>
            <div className="second">
                <p>Serbe: {data[0].othersW}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Angleze: {data[0].englishR}</p>
            </div>
            <div className="second">
                <p>Italiane: {data[0].othersR}</p>
            </div>

        </div>
        <div className="title-containers">
            <p>Njohuri kompjuterike</p>
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Word: {data[0].word}</p>
            </div>
            <div className="second">
                <p>Excel: {data[0].excel}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>PowerPoint: {data[0].powerpoint}</p>
            </div>
            <div className="second">
                <p>Access: {data[0].access}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Windows: {data[0].windows}</p>
            </div>
            <div className="second">
                <p>Outlook: {data[0].Outlook}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Internet Explorer: {data[0].InternetExp}</p>
            </div>
            <div className="second">
                <p>Visual Basic: {data[0].VisualBasic}</p>
            </div>

        </div>
        <div className="title-containers">
            <p>Historia e edukimit</p>
        </div>
        <div className="one-direction">
            <div className="first">
                <p>Shkolla e mesme: {data[0].school}</p>
            </div>
            <div className="second">
                <p>Universiteti: {data[0].university}</p>
            </div>
            <div className="second">
                <p>Trajnimet: {data[0].trainings}</p>
            </div>
            <div className="second">
                <p>Tjera: {data[0].tjera}</p>
            </div>

        </div>
        <div className="title-containers">
            <p>Përvoja e punës</p>
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Titulli i pozitës: {data[0].title1}</p>
            </div>
            <div className="second">
                <p>Institucioni: {data[0].insitution1}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Përshkrimi i detyrave: {data[0].tasks1}</p>
            </div>
            <div className="second">
                <p>Data e fillimit: {data[0].startDate1.split('T')[0]}</p>
            </div>
            

        </div>
        <div className="two-in-one">
        <div className="second">
                <p>Data e Mbarimit: {data[0].endDate1.split('T')[0]}</p>
            </div>
        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Titulli i pozitës: {data[0].title2}</p>
            </div>
            <div className="second">
                <p>Institucioni: {data[0].insitution2}</p>
            </div>

        </div>
        <div className="two-in-one">
            <div className="first">
                <p>Përshkrimi i detyrave: {data[0].tasks2}</p>
            </div>
            <div className="second">
                <p>Data e fillimit: {data[0].startDate2.split('T')[0]}</p>
            </div>
            

        </div>
        <div className="two-in-one">
        <div className="second">
                <p>Data e Mbarimit: {data[0].endDate2.split('T')[0]}</p>
            </div>
        </div>

    </div>

    )}
    
         

    
   
    </>
}
export default SingleJobApp;