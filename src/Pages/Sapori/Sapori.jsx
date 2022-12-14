import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';

const Sapori = () =>{
    const Pages = {
        title:"CONAD Piacersi",
        description:"Sapori Dintorni, mahnituni nga zgjedhja juaj! Hyni në botën e shijes që përhap kjo linjë dhe do të zbuloni kënaqësinë e shijeve të reja, por dhe shijen tradizionale me specialitetet e vërteta të kuzhinës së pasur italiane.",
        image:"https://imgur.com/wLg2b7K.jpg",
        secondImage:"https://imgur.com/JXOGVgR.jpg"
    }
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return<>
    <ConadPages data={Pages} />
    <div className="footer-cnd">
      <FooterConad />
    </div>
    </>

}
export default Sapori;