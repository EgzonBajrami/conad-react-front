import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadEco = () =>{
    const Pages = {
        title:"CONAD Eco",
        description:"Një gamë produktesh që respektojnë ekuilibrin natyror. Për të jetuar në harmoni me një ekosistem është e nevojshme të kujdesesh për të. Produktet e linjës Verso Natura ECO ju ndihmojnë të bëni pikërisht këtë: ata kujdesen për mjedisin, duke zvogëluar ndikimin e tyre në të dhe tek ata që jetojnë në atë mjedis. Me Verso Natura ECO vijnë një sërë produktesh që janë më të vëmendshëm ndaj ekuilibrit natyror. Edhe në fushën e produkteve funksionale, të tilla si ato për pastrimin e shtëpisë ose për pastrimin e veshjeve, është e mundur të mbështetesh në zgjidhje të testuara, hipoalergjike dhe biokompatibile (të pa dëmshme për ambientin): detergjentët, të testuar dermatologjikisht përmbajnë përbërës bidegradues me përbërje me origjinë bimore, të marra nga burime të rinovueshme.",
        image:"https://imgur.com/BlTat0c.png",
        secondImage:"https://imgur.com/TKJ3tBy.jpg"
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
export default ConadEco;