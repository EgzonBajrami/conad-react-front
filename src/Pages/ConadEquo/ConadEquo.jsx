import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadEquo = () =>{
    const Pages = {
        title:"CONAD Equo",
        description:"⁣Plantacionet e përdorura për të prodhuar Cafe 100% Arabica të linjës #VersoNatura rriten në bimësinë e Amerikës Latine, ku pjelloria e dherave vullkanike dhe ndikimi i dy oqeaneve i japin kësaj larmie një aromë të fortë, këmbëngulëse, të butë dhe të ëmbël.",
        image:"https://imgur.com/viaywDN.png",
        secondImage:"https://imgur.com/GhEj2nF.jpg"
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
export default ConadEquo;