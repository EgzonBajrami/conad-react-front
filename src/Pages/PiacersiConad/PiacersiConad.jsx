import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const PiacersiConad = () =>{
    const Pages = {
        title:"CONAD Piacersi",
        description:"Me linjën e produkteve Piacersi është e mundur një formë e përsosur trupore, organizëm i shëndetshëm dhe i ekuilibruar në çdo moment të ditës nga mëngjesi deri në darkë pa hequr dorë nga shija dhe ushqimet e preferuara.",
        image:"https://imgur.com/buwXZ94.png",
        secondImage:"https://imgur.com/U85O5ph.jpg"
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
export default PiacersiConad;