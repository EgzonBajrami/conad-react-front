import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const AlimentumLaktoze = () =>{
    const Pages = {
        title:"Alimentum Pa Laktoze",
        description:"Produktet pa laktozë (më pak se 0,01%) janë shumë të tretshme sepse laktoza, një sheqer kompleks i pranishëm natyrshëm në qumësht, ndahet në dy sheqerna të thjeshtë më të lehtë të asimilueshëm.",
        image:"https://imgur.com/DEK3Apa.png",
        secondImage:"https://imgur.com/gsKUYR4.jpg"
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
export default AlimentumLaktoze;