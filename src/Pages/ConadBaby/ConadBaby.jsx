import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadBaby = () =>{
    const Pages = {
        title:"CONAD Baby",
        description:"CONAD Baby është linja e produkteve për kujdesin e fëmijëve nga 0 deri në 6 vjeç: peceta, detergjent, vajra dhe kremra mbrojtës dhe pelena Dry-way.",
        image:"https://imgur.com/uLr0S9n.png",
        secondImage:"https://imgur.com/jNMfLtz.jpg"
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
export default ConadBaby;