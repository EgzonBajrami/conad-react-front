import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const Alimentum = () =>{
    const Pages = {
        title:"Alimentum Pa Laktoze",
        description:"Birra me një shije klasike dhe një shije mesatarisht të hidhur, të afta të përshtaten për çdo konsumator të tillë si Bionda 11 Paralleli ose birra me një shije të plotë për shijet më të kërkuara dhe të rafinuara siç është Speciali 11 Paralleli.Ose Bionda e pafiltruar, e fermentuar në fund, me një aromë barishtore dhe një shije që ruan notat e frutave të verdha dhe kajsisë siç është Bionda Grezza 11 Paralleli.",
        image:"https://imgur.com/RcXcor4.png",
        secondImage:"https://imgur.com/JXQYg8c.jpeg"
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
export default Alimentum;