import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadBio = () =>{
    const Pages = {
        title:"CONAD Bio",
        description:"Verso Natura BIO sillet rreth gjithçkaje që është organike dhe bazohet në një kultivim që përdor burimet natyrore me përgjegjësi. Me produktet e linjës BIO, natyraliteti bëhet një mënyrë e re jetese që favorizon një dietë të thjeshtë dhe të shëndetshme.",
        image:"https://imgur.com/y24HAaT.jpg",
        secondImage:"https://imgur.com/rtPnPD6.jpg"
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
export default ConadBio;