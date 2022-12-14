import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadPet = () =>{
    const Pages = {
        title:"CONAD Pet",
        description:"Oferta e CONAD për botën e kafshëve shtëpiake pasurohet në shumëllojshmëri dhe receta.",
        image:"https://imgur.com/UqylS8A.png",
        secondImage:"https://imgur.com/gVT81uX.jpg"
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
export default ConadPet;