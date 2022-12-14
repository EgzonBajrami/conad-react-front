import ConadPages from "../../components/ConadPages/ConadPages";
import FooterConad from "../../components/FooterConad/FooterConad";
import {useEffect} from 'react';
const ConadEssentiae = () =>{
    const Pages = {
        title:"CONAD Essentiae",
        description:"CONAD Essentiae është një linjë produktesh bukurie që kujdeset për lëkurën falë ekstraktit natyral të përbërësve. Çdo recetë kombinon ekstratet natyrale të luleve me një kombinim unik dhe ideal për një trajtim të plotë dhe efiçent.Benefitet e produkteve kozmetike natyrale janë ndërtuar mbi bazën e përbërësve të bimëve dhe luleve që vijnë nga ekstraktet natyrale si ujrat e luleve të përftuara nga distilimi i bimëve aromatike vajrave vegjetal dhe vajrave esencial.",
        image:"https://imgur.com/Iz7Zo4Z.png",
        secondImage:"https://imgur.com/mhrwDbb.jpg"
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
export default ConadEssentiae;