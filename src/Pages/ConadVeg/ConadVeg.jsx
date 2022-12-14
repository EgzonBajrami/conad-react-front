import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadVeg = () =>{
    const Pages = {
        title:"CONAD Veg",
        description:"Një zgjedhje e mirëqenies, për të jetuar me liri dhe fleksibilitet. Eliminimi ose zvogëlimi i marrjes së proteinave shtazore mund të jetë një zgjedhje etike ose e mirëqenies: në çdo rast, është një zgjedhje në mbrojtje të natyrës. Produktet e linjës Verso Natura VEG u drejtohen kryesisht atyre që kanë vendosur të ndjekin një dietë vegjetariane (dhe në disa raste vegane). Së dyti, ato plotësojnë nevojat e atyre që kanë zgjedhur të përfshijnë një sasi më të madhe të proteinave me bazë bimore në dietën e tyre ditore, pa sakrifikuar larminë dhe shijen. Me fjalë të tjera, ato u drejtohen të gjithë atyre që kanë vendosur, në këtë mënyrë, të duan veten dhe botën. Linja VEG është një zgjedhje e mirëqenies, për të jetuar në liri dhe fleksibilitet.",
        image:"https://imgur.com/WakNANh.jpg",
        secondImage:"https://imgur.com/Jr5S8jS.jpg"
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
export default ConadVeg;