import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const AlimentumPage = () =>{
    const Pages = {
        title:"Alimentum",
        description:"Linja CONAD Alimentum pa Gluten, kushtuar të gjithë njerëzve intolerant ndaj glutenit, të cilët nuk duan të heqin dorë nga shija: një gamë e gjerë që përfshin makarona, produkte të pjekura, zëvendësues të bukës dhe shumë produkte të tjera, të përgatitura me përbërës natyral pa gluten, por të pasura në shije.",
        image:"https://imgur.com/uhOy8AM.png",
        secondImage:"https://imgur.com/XlJapJT.jpg"
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
export default AlimentumPage;